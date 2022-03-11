import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductsTable from "./productsTableAgrocery";
import _ from "lodash";
import { trackPromise } from "react-promise-tracker";
import SearchBox from "../../common/searchBox";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import { TableBody } from "../Table/TableElements";
import { FlexDisplay } from "../../common/CommonElements";
import { getProducts } from "../../services/userAgroceryService";
import { ButtonSubmit } from "../../common/CommonElements";
// import { LoadingIndicator } from "../common/CommonElements";

class ProductsAgrocery extends React.Component {
  state = {
    pageSize: 15,
    currentPage: 1,
    products: [],
    sortColumn: { path: "name", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    await trackPromise(
      getProducts().then(({ data: products }) => {
        this.setState({ products });
      })
    );
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getSortedData = () => {
    const {
      pageSize,
      currentPage,
      products,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = products;
    if (searchQuery)
      filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedProducts = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, sortedProducts: paginatedProducts };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, sortedProducts } = this.getSortedData();
    return (
      <Fragment>
        <TableBody>
          <FlexDisplay>
            <Link to="/agrocery/products/add">
              <ButtonSubmit>Add Product</ButtonSubmit>
            </Link>
            <p>Showing {totalCount} products in the database</p>
          </FlexDisplay>
          <FlexDisplay>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </FlexDisplay>
          <ProductsTable
            data={sortedProducts}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          {/* <LoadingIndicator /> */}
        </TableBody>
      </Fragment>
    );
  }
}

export default ProductsAgrocery;
