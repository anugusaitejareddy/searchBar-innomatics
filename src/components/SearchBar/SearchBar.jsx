import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function SearchBar({ handleSearch }) {
  const [search, setSearch] = React.useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  }

  return (
    <div className="searchInput-wrapper">
      <input
        placeholder="Search..."
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
      />
      <FaSearch id="search-icon" />
    </div>
  );
}

export default SearchBar;
