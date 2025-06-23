import React from "react";

const Pagination = ({ itemsPerPage, handleResultsPerPageChange }) => {
  return (
    <React.Fragment>
      <div className="col-2 pagination">
        <select
          id="pagination"
          name="pagination"
          onChange={handleResultsPerPageChange}
          value={itemsPerPage}
        >
          <option value="10">10 Result Per Page</option>
          <option value="20">20 Result Per Page</option>
          <option value="30">30 Result Per Page</option>
        </select>
      </div>
    </React.Fragment>
  );
};
export default Pagination;
