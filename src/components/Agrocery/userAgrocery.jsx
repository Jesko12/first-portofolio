import React, { Fragment } from "react";
import UsersTable from "./usersTableAgrocery";
import _ from "lodash";
import { trackPromise } from "react-promise-tracker";
import SearchBox from "../../common/searchBox";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import { TableBody } from "../Table/TableElements";
import { FlexDisplay } from "../../common/CommonElements";
import { getUsers } from "../../services/userAgroceryService";
import { LoadingIndicator } from "../../common/CommonElements";

class UserAgrocery extends React.Component {
  state = {
    pageSize: 15,
    currentPage: 1,
    users: [],
    sortColumn: { path: "full_name", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    await trackPromise(
      getUsers().then(({ data: users }) => {
        this.setState({ users });
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
      users,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = users;
    if (searchQuery)
      filtered = users.filter((user) =>
        user.full_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedUsers = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, sortedUsers: paginatedUsers };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, sortedUsers } = this.getSortedData();
    return (
      <Fragment>
        <TableBody>
          <p>Showing {totalCount} users in the database</p>
          <FlexDisplay>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </FlexDisplay>
          <UsersTable
            data={sortedUsers}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <LoadingIndicator />
        </TableBody>
      </Fragment>
    );
  }
}

export default UserAgrocery;
