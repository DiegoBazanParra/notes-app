import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  const handleSearch = (e) => {
    const word = e.target.value;
    handleSearchNote(word);
  };
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="Busca tu Nota Aquí..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
