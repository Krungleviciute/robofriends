import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba br3 bg-washed-green"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
