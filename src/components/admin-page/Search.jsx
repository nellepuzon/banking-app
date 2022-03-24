import React, { useContext } from 'react';
import AdminContext from '../../context/AdminDataContext';
import DataContext from '../../context/DataContext';

function Search() {
  const { adminLogin } = useContext(DataContext);
  const { onSearch } = useContext(AdminContext);

  return (
    <div className='search-bar'>
      <div className='accounts-title'>
        Accounts
        <i
          className='fa-solid fa-right-from-bracket dashboard-icon logout-mobile'
          onClick={() => {
            adminLogin(false);
          }}
        ></i>
      </div>
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
