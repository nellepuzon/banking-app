import React from 'react';
import useAdminContext from '../../hooks/useAdminContext';
import useDataContext from '../../hooks/useDataContext';

function Search() {
  const { adminLogin } = useDataContext()
  const { onSearch } = useAdminContext()

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
