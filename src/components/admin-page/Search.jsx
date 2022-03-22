import React, { useContext } from "react";
import AdminContext from "../../context/AdminDataContext";

function Search() {
    const { onSearch } = useContext(AdminContext);

  return (
    <div className='search-bar'>
        Accounts
      <input
        className='search'
        type='text'
        placeholder='Search'
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Search;
