import React, { Fragment } from "react";
import OrdersTable from "./ordersTableAgrocery";
import _ from "lodash";
import { trackPromise } from "react-promise-tracker";
import SearchBox from "../../common/searchBox";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import { TableBody } from "../Table/TableElements";
import { FlexDisplay } from "../../common/CommonElements";
import { getOrders } from "../../services/userAgroceryService";

class OrdersAgrocery extends React.Component {
  state = {
    pageSize: 15,
    currentPage: 1,
    orders: [],
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    await trackPromise(
      getOrders().then(({ data: orders }) => {
        this.setState({ orders });
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
      orders,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = orders;
    if (searchQuery)
      filtered = orders.filter((order) =>
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedOrders = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, sortedOrders: paginatedOrders };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, sortedOrders } = this.getSortedData();
    return (
      <Fragment>
        <TableBody>
          <FlexDisplay>
            <p>Showing {totalCount} orders in the database</p>
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
          <OrdersTable
            data={sortedOrders}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
        </TableBody>
      </Fragment>
    );
  }
}

export default OrdersAgrocery;
