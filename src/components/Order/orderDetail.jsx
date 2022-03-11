import React, { Fragment } from "react";
import Form from "../../common/form";
import { getOrderByID } from "../../services/userAgroceryService";
import { TableBody } from "../Table/TableElements";
import { ButtonPrimary, ButtonReload, TableWrapper, TopLabel } from "../../common/CommonElements";
import { Link } from "react-router-dom";
import OrderModal from "../../common/orderModal";

class OrderDetail extends Form {
  state = {
    modalShowed: false,
    currentOrder: {},
    data: {
      order_driver: 0,
      order_items: [],
      status: "",
      total_price: 0,
      order_price: 0,
      destination_address: "",
      destination_province: "",
      destination_city: "",
      shipping_status: "",
      logistic_status: "",
      payment_method: "",
      payment_channel: "",
      bank_code: "",
      shipment_price: 0,
      paid_amount: 0,
      mobile_number: "",
      shipment_status: "",
      receiver: "",
      invoice_url: "",
      created_at: "",
    },
    errors: {},
  };

  async componentDidMount() {
    const orderId = this.props.match.params.id;
    const { data } = await getOrderByID(orderId);

    const order_driver = data.order.id;
    const order_items = data.order.order_items;
    const status = data.order.status;
    const total_price = data.order.total_price;
    const destination_address = data.shipment.destination_address;
    const address_label = data.shipment.address_label;
    const receiver = data.shipment.receiver;
    const mobile_number = data.shipment.mobile_number;
    const shipment_status = data.shipment.status;
    const payment_method = data.payment.payment_method;
    const payment_channel = data.payment.payment_channel;
    const bank_code = data.payment.bank_code;
    const order_price = data.payment.order_price;
    const shipment_price = data.payment.shipment_price;
    const paid_amount = data.payment.paid_amount;
    const created_at = data.payment.created_at;

    const customObject = {

      order_items: order_items,
      order_driver: order_driver,
      status: status,
      total_price: total_price,
      destination_address: destination_address,
      address_label: address_label,
      receiver: receiver,
      mobile_number: mobile_number,
      payment_method: payment_method,
      payment_channel: payment_channel,
      bank_code: bank_code,
      order_price: order_price,
      shipment_price: shipment_price,
      shipment_status: shipment_status,
      paid_amount: paid_amount,
      created_at: created_at,
    };
    this.setState({ data: customObject });
  }

  handleModal = (order) => {
    const modalShowed = !this.state.modalShowed;
    this.setState({ modalShowed, currentOrder: order || {} })
    if (modalShowed === false) {
      window.history.replaceState(null, `/agrocery/order/detail/` + this.props.match.params.id);
    }
  }

  render() {
    const { modalShowed, currentOrder } = this.state;
    const { order_driver, status, order_items, created_at, receiver, mobile_number,
      destination_address, payment_method, payment_channel, total_price,
      order_price, shipment_price, shipment_status } = this.state.data;
    return (
      <Fragment>
        <TableBody>
          <TableWrapper>
            <thead>
              <tr>
                <th>Status Order</th>
                <th>Tanggal Pembelian</th>
                <th>ID Pembelian</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{status}</td>
                <td>{created_at}</td>
                <td>{order_driver}</td>
              </tr>
            </tbody>
          </TableWrapper>
          <div>
            <h6 style={{ fontWeight: 'normal' }}>Product</h6>
          </div>
          <TableWrapper>
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order_items.map(order_item =>
                <tr key={order_item.id}>
                  <td>{order_item.name}</td>
                  <td>{order_item.sku}</td>
                  <td>{order_item.quantity}</td>
                  <td>{order_item.sale_price}</td>
                </tr>)}
            </tbody>
          </TableWrapper>
          <div>
            <h6 style={{ fontWeight: 'normal' }}>Info Pengiriman</h6>
          </div>
          <TopLabel>
            <p>{receiver}</p>
            <p>{mobile_number}</p>
            <p>{destination_address}</p>
          </TopLabel>
          <br />
          <div>
            <h6 style={{ fontWeight: 'normal' }}>Rincian Pembayaran</h6>
          </div>
          <TopLabel>
            <p>Metode Pembayaran<span style={{ float: 'right', fontWeight: 'normal' }}>{payment_method}</span></p>
            <p>Payment Channel<span style={{ float: 'right', fontWeight: 'normal' }}>{payment_channel}</span></p>
            <br />
            <p>Total Harga<span style={{ float: 'right', fontWeight: 'normal' }}>{order_price}</span></p>
            <p>Total Ongkos Kirim <span style={{ float: 'right', fontWeight: 'normal' }}>{shipment_price}</span></p>
            <br />
            <p style={{fontWeight: 'bolder'}}>Total Belanja<span style={{ float: 'right' }}>{total_price}</span></p>
          </TopLabel>
          <br />
          <div>
            <h6 style={{ fontWeight: 'normal' }}>Shipment</h6>
          </div>
          <TopLabel>
            <h6>Shipment Status<span style={{ float: 'right' }}>{shipment_status}</span></h6>
          </TopLabel>
          <ButtonPrimary
            onClick={() => this.handleModal(order_driver)}
            disabled= {(status !== "Paid" 
                && status !== "In Shipment") || 
                (shipment_status !== "Waiting"
                && shipment_status !== "Rejected"
                && shipment_status !== "Expired")}>
            {"Find Driver"}
          </ButtonPrimary>
          <Link to="/agrocery/orders">
            <ButtonReload>Back</ButtonReload>
          </Link>
          <OrderModal
            order={currentOrder}
            show={modalShowed}
            onHide={() => this.handleModal()}
          />
        </TableBody>
      </Fragment>
    );
  }
}

export default OrderDetail;
