import React, { Fragment } from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import userAgroceryService, { getBanners } from "../../services/userAgroceryService";
import { toast } from "react-toastify";
import { TableBody } from "../Table/TableElements";
import {
  Images,
  ImageUpload,
} from "./BannerElements";
import storage from "../../services/firebase";

class AddBanner extends Form {
  state = {
    images: [],
    objectURLs: [],
    data: {
      name: "",
      type: ""
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    type: Joi.string().required().label("Type"),
  };

  async componentDidMount() {
    const { data } = await getBanners();
    this.setState({ products: data });
  }

  uploadImage = async (image) => {
    const environment = process.env.REACT_APP_ENVIRONMENT;
    const ref = storage.ref(`/${environment}/${image.name}`);
    return await ref
      .put(image)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .catch((error) => toast.error(`Error upload photo: ${error}`));
  };

  doSubmit = async () => {
    const { images, data } = this.state;

    if (images.isEmpty) {
      return;
    }

    const promise = [];
    images.forEach((image) => {
      promise.push(this.uploadImage(image));
    });

    Promise.all(promise).then((url) => {
      let body = {
        name: data.name,
        type: data.type,
        image_url: url[0],
      };
      toast.info("Banner Product");
      try {
        userAgroceryService.addBanner(body);
        toast.success("Banner Added");
        setTimeout(function () {
          window.location = "/agrocery/banners";
        }, 1000);
      } catch (e) {
        if (e.response && e.response.status === 400) {
          toast.error(e.response.data.error);
        }
      }
    });
  };

  render() {
    const { objectURLs } = this.state;
    return (
      <Fragment>
        <TableBody>
          <h1>Add Banner</h1>
          <form onSubmit={this.handleSubmit}>
            <Images>
              {objectURLs &&
                objectURLs.map((url) => (
                  <img key={url} src={url} alt="" width={100} />
                ))}
              <ImageUpload>
                <label
                  style={{ margin: 0, cursor: "pointer" }}
                  htmlFor="image_url"
                >
                  Upload
                </label>
              </ImageUpload>
            </Images>
            {this.renderInputFile("image_url", "", "file", true)}
            {this.renderInput("name", "Name*")}
            {this.renderInput("type", "Type*")}
            {this.renderButton("Add Banner")}
          </form>
          {/* <LoadingIndicator /> */}
        </TableBody>
      </Fragment>
    );
  }
}

export default AddBanner;
