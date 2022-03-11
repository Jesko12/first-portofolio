import React, { Component } from "react";
import Table from "../../common/table";
import { Link } from "react-router-dom";
import OrderModal from "../../common/orderModal";

class OrdersTableAgrocery extends Component {
  state = {
    modalShowed: false,
    currentOrder: {},
  };

  columns = [
    { path: "id", label: "ID" },
    { path: "full_name",
       label: "Name",
      content: (order) => (
        <Link
          style={{textDecoration: "none", color: "#557174"}}
          to={`/agrocery/order/detail/${order.id}`}
        >
          {order.full_name}
        </Link>
      ) },
    { path: "status", label: "Status" },
    { path: "total_price", label: "Total Price" },
    { path: "created_at", label: "Created at" },
  ];

  render() {
    const { data, onSort, sortColumn } = this.props;
    const { currentOrder, modalShowed } = this.state;
    return (
      <div>
        <Table
          columns={this.columns}
          data={data}
          onSort={onSort}
          sortColumn={sortColumn}
        />
          <OrderModal
          order={currentOrder}
          show={modalShowed}
          onHide={() => this.handleModal()}
        />
      </div>
    );
  }
}

export default OrdersTableAgrocery;
