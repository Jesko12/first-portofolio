import React, { Component } from "react";
import Table from "../../common/table";
import { BsFillTrashFill } from "react-icons/bs";
import userAgroceryService from "../../services/userAgroceryService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class ProductsTableAgrocery extends Component {
  state = {
    modalShowed: false,
    currentProducts: {},
    products: [],
  };

  columns = [
    { path: "image_urls", label: "Image" },
    { path: "sku", label: "SKU" },
    {
      path: "name",
      label: "Name",
      content: (products) => (
        <Link
          style={{ textDecoration: "none", color: "#557174" }}
          to={`/agrocery/product/edit/${products.id}`}
        >
          {products.name}
        </Link>
      ),
    },
    { path: "category", label: "Category" },
    { path: "price", label: "Price" },
    { path: "weight", label: "Weight" },
    { path: "quantity", label: "Quantity" },
    { path: "products_sold", label: "Product Sold" },
    {
      key: "delete",
      content: (products) => (
        <BsFillTrashFill
          onClick={() => this.deleteProduct(products.id)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  deleteProduct = async (id) => {
    const { products } = this.state;
    const filteredProducts = products.filter((product) => product.id !== id);
    this.setState({ filteredProducts });
    const res = await userAgroceryService.deleteProduct(id);
    if (res.status === 200) {
      toast.success("Product berhasil dihapus");
      window.location.reload();
    } else {
      toast.error(res.data["error"]);
    }
  };

  render() {
    const { data, onSort, sortColumn } = this.props;
    return (
      <div>
        <Table
          columns={this.columns}
          data={data}
          onSort={onSort}
          sortColumn={sortColumn}
        />
      </div>
    );
  }
}

export default ProductsTableAgrocery;
