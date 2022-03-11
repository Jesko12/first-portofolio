import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BannersTableAgrocery from "./bannersTableAgrocery";
import _ from "lodash";
import { trackPromise } from "react-promise-tracker";
import SearchBox from "../../common/searchBox";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import { TableBody } from "../Table/TableElements";
import { FlexDisplay } from "../../common/CommonElements";
import { getBanners } from "../../services/userAgroceryService";
import { ButtonSubmit } from "../../common/CommonElements";
// import { LoadingIndicator } from "../common/CommonElements";

class BannersAgrocery extends React.Component {
  state = {
    pageSize: 15,
    currentPage: 1,
    banners: [],
    sortColumn: { path: "name", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    await trackPromise(
      getBanners().then(({ data: banners }) => {
        this.setState({ banners });
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
      banners,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = banners;
    if (searchQuery)
      filtered = banners.filter((banner) =>
        banner.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedProducts = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, sortedBanners: paginatedProducts };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, sortedBanners } = this.getSortedData();
    return (
      <Fragment>
        <TableBody>
          <FlexDisplay>
            <Link to="/agrocery/banners/add">
              <ButtonSubmit>Add Banner</ButtonSubmit>
            </Link>
            <p>Showing {totalCount} banners in the database</p>
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
          <BannersTableAgrocery
            data={sortedBanners}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          {/* <LoadingIndicator /> */}
        </TableBody>
      </Fragment>
    );
  }
}

export default BannersAgrocery;
