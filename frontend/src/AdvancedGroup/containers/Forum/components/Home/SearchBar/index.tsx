import React from "react";
import "./style.css";

interface SearchBarProps {
  value: string;
  handleSearchKey: any;
  clearSearch: any;
  formSubmit: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleSearchKey,
  clearSearch,
  formSubmit,
}) => {
  return (
    <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search by Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>x</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
