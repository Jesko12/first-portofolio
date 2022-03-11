import React, { Fragment } from "react";
// import { LoadingIndicator } from "../common/CommonElements";
import Form from "../../common/form";
import Joi from "joi-browser";
import userAgroceryService, { getProducts } from "../../services/userAgroceryService";
import { toast } from "react-toastify";
import { TableBody } from "../Table/TableElements";
import {
  Images,
  ImageUpload,
} from "./ProductElements";
import storage from "../../services/firebase";

class AddProduct extends Form {
  state = {
    images: [],
    objectURLs: [],
    data: {
      sku: "",
      name: "",
      price: 0,
      sale_price:  0,
      discount_price: 0,
      weight: 0,
      description: "",
      quantity: 0,
      category: "",
    },
    errors: {},
  };

  schema = {
    sku: Joi.string().required().label("SKU"),
    name: Joi.string().required().label("Name"),
    category: Joi.string().required().label("Category"),
    price: Joi.number().min(0).label("Price"),
    discount_price: Joi.number().min(0).label("Discount Price"),
    sale_price: Joi.number().min(0).label("Sale Price"),
    weight: Joi.number().min(0).label("Weight"),
    description: Joi.string().allow("").label("Description"),
    quantity: Joi.number().min(0).label("Quantity"),
  };

  async componentDidMount() {
    const { data } = await getProducts();
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

    Promise.all(promise).then((result) => {
      let urls = [];
      for (let i = 0; i < result.length; i++) {
        urls.push(result[i]);
      }
      let body = {
        sku: data.sku,
        name: data.name,
        price: data.price,
        discount_price: data.discount_price,
        sale_price: data.sale_price,
        weight: data.weight,
        description: data.description,
        quantity: data.quantity,
        image_urls: urls,
        category: data.category,
      };
      toast.info("Adding Product");
      try {
        userAgroceryService.addProduct(body);
        toast.success("Product Added");
        setTimeout(function () {
          window.location = "/agrocery/products";
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
          <h1>Add Product</h1>
          <form onSubmit={this.handleSubmit}>
            <Images>
              {objectURLs &&
                objectURLs.map((url) => (
                  <img key={url} src={url} alt="" width={100} />
                ))}
              <ImageUpload>
                <label
                  style={{ margin: 0, cursor: "pointer" }}
                  htmlFor="image_urls"
                >
                  Upload
                </label>
              </ImageUpload>
            </Images>
            {this.renderInputFile("image_urls", "", "file", true)}
            {this.renderInput("sku", "SKU*")}
            {this.renderInput("name", "Name*")}
            {this.renderInput("category","Category*" )}
            {this.renderInput("price", "Price*", "number")}
            {this.renderInput("discount_price", "Discount Price", "number")}
            {this.renderInput("sale_price", "Sale Price", "number")}
            {this.renderInput("weight", "Weight", "number")}
            {this.renderTextArea("description", "Description")}
            {this.renderInput("quantity", "Quantity*", "number")}
            {this.renderButton("Add Product")}
          </form>
          {/* <LoadingIndicator /> */}
        </TableBody>
      </Fragment>
    );
  }
}

export default AddProduct;
