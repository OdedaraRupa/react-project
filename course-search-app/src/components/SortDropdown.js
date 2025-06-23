import React from "react";

const SortDropdown = ({ setSortOrder }) => {
  return (
    <React.Fragment>
      <div className="col-2 sort">
        <select
          id="sorting"
          name="sorting"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="relevant">Relevant</option>
          <option value="program-asc">Program A–Z</option>
          <option value="program-desc">Program Z–A</option>
          <option value="institution-asc">Institution A–Z</option>
          <option value="institution-desc">Institution Z–A</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default SortDropdown;
