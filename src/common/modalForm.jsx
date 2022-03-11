import React from "react";
import { Modal } from "react-bootstrap";
import { ButtonSubmit } from "./CommonElements";

const ModalForm = ({ title, body, button, onHide, ...rest }) => {
  return (
    <Modal
      {...rest}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <ButtonSubmit onClick={onHide} style>{button}</ButtonSubmit>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;

/*
<h4>{client.name}</h4>
            <p>Current Status: {client.status}</p>
            <form onSubmit={this.handleSubmit}>
                {this.renderSelect(
                    "status",
                    options.filter((option) => option !== client.status)
                )}
                {data.status === "Menunggu Pembayaran"
                    ? this.renderInput("salesOrderNumber", "Sales Order Number")
                    : data.status === "Pembayaran Diterima"
                        ? this.renderInput("amount", "Amount", "number")
                        : null}
                {this.renderButton("Update Status")}
            </form>
 */
