import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robofriends"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
