import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import userAgroceryService from "../services/userAgroceryService";
import ModalForm from "./modalForm";

class OrderModal extends Form {
  state = {
    data: {
      notes: "",
     },
    errors: {},
  };

  schema = {
    notes: Joi.string().allow("").label("Notes"),
  };

  doSubmit = async () => {
    const { order } = this.props;
    toast.info("Finding Driver")
    try {
      await userAgroceryService.findDriver(order);
      toast.success("Assigning Driver");
      setTimeout(function () {
        window.location = "/agrocery/orders";
      }, 1000);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        toast.error(e.response.data.error);
      }
    }
  };

  render() {
    const {
      modalShowed,
      onHide,
      options,
      order,
      onChange,
      ...rest
    } = this.props;

    return (
      <ModalForm
        title={"Find Driver"}
        body={
          <>
            <p>Do Double Check The Order and Address Before Continuing</p>
            <form onSubmit={this.handleSubmit}>
            {this.renderButton("Find Driver")}
            </form>
          </>
        }
        button={"Close"}
        onHide={onHide}
        {...rest}
      />
    );
  }
}

export default OrderModal;
