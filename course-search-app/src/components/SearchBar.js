import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <React.Fragment>
      <div className="col-4 search-bar">
        <input
          type="text"
          placeholder="search by Course title, Institute, or Area of Study"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
      </div>
    </React.Fragment>
  );
};
export default SearchBar;
