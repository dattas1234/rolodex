import "./searchBox-styles.css";
import React from "react";
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="Search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
