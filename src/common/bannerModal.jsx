import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import userAgroceryService from "../services/userAgroceryService";
import ModalForm from "./modalForm";

class BannerModal extends Form {
  state = {
    data: { is_active: "" },
    errors: {},
  };

  schema = {
    is_active: Joi.string().required().label("Status"),
  };

  doSubmit = async () => {
    const { banner } = this.props;
    const { data } = this.state
    let body = {
      is_active: data.is_active
    };
    toast.info("Updating order...");
    try {
      await userAgroceryService.updateBannerStatus(banner.id, body);
      toast.success("Banner status updated!");
      setTimeout(function () {
        window.location = "/agrocery/banners";
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
      banner,
      onChange,
      ...rest
    } = this.props;

    return (
      <ModalForm
        title={"Update Banner Status"}
        body={
          <>
            <p>Current Status: {banner.is_active}</p>
            <form onSubmit={this.handleSubmit}>
              {this.renderSelect(
                "is_active",
                options.filter((option) => option !== banner.is_active),
                "Status"
              )}
              {this.renderButton("Update Status")}
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

export default BannerModal;
