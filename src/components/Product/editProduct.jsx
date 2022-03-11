import React, { Fragment } from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import userAgroceryService, {
  getProductByID,
} from "../../services/userAgroceryService";
import { toast } from "react-toastify";
import { TableBody } from "../Table/TableElements";

class EditProduct extends Form {
  state = {
    data: {
      id: 0,
      sku: "",
      name: "",
      category: "",
      price: 0,
      discount_price: 0,
      sale_price: 0,
      weight: 0,
      description: "",
      quantity: 0,
      products_sold: 0,
    },
    errors: {},
  };

  schema = {
    id: Joi.number().min(0).label("ID"),
    sku: Joi.string().required().label("SKU"),
    name: Joi.string().required().label("Name"),
    category: Joi.string().required().label("Category"),
    price: Joi.number().min(0).label("Price"),
    discount_price: Joi.number().min(0).label("Discount Price"),
    sale_price: Joi.number().min(0).label("Sale Price"),
    weight: Joi.number().min(0).label("Weight"),
    description: Joi.string().allow(null).allow('').label("Description"),
    quantity: Joi.number().min(0).label("Quantity"),
    products_sold: Joi.number().min(0).label("Product Sold"),
  };

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const { data } = await getProductByID(productId);
    delete data.image_urls;
    this.setState({ data });
  }

  doSubmit = async () => {
    const { data } = this.state;
    let body = {
      sku: data.sku,
      name: data.name,
      domain: data.domain,
      price: data.price,
      discount_price: data.discount_price,
      sale_price: data.sale_price,
      weight: data.weight,
      description: data.description,
      quantity: data.quantity,
      category: data.category,
    };

    toast.info("Editing Product");
    try {
      const id = data.id;
      await userAgroceryService.editProduct(id, body);
      toast.success("Product Edited");
      setTimeout(function () {
        window.location = "/agrocery/products";
      }, 1000);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        toast.error(e.response.data.error);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <TableBody>
          <h1>Edit Product</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("sku", "SKU*")}
            {this.renderInput("name", "Name*")}
            {this.renderInput(
              "category",
              "Category*"
            )}
            {this.renderInput("price", "Price*", "number")}
            {this.renderInput("discount_price", "Discount Price", "number")}
            {this.renderInput("sale_price", "Sale Price", "number")}
            {this.renderInput("weight", "Weight", "number")}
            {this.renderTextArea("description", "Description")}
            {this.renderInput("quantity", "Quantity*", "number")}
            {this.renderButton("Update")}
          </form>
        </TableBody>
      </Fragment>
    );
  }
}

export default EditProduct;
