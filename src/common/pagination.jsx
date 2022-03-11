import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <div style={{ marginLeft: "20px" }}>
      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        breakLabel="..."
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => onPageChange(data.selected + 1)}
        activeClassName={"page-item active"}
        activeLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        previousClassName="page-item"
        nextLinkClassName="page-link"
        nextClassName="page-item"
        breakLinkClassName="page-link"
        breakClassName="page-item"
      />
    </div>
    // <nav>
    //   <ul className="pagination">
    //     {pages.map((page) => (
    //       <li
    //         key={page}
    //         className={page === currentPage ? "page-item active" : "page-item"}
    //       >
    //
    //         <button onClick={() => onPageChange(page)} className="page-link">
    //           {page}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
