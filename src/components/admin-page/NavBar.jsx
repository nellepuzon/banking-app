import React, { useContext } from "react";
import AdminContext from "../../context/AdminDataContext";
import DataContext from "../../context/DataContext";

function NavBar() {
  const { adminLogin } = useContext(DataContext);
  const { onSearch } = useContext(AdminContext);

  return (
    <div className="admin-dashboard">
      <div className="nav-bar">
        <div className="accounts">Accounts</div>
        <div className="sort-icon">
          <i
            className="fa-solid fa-right-from-bracket dashboard-icon"
            onClick={() => {
              adminLogin(false);
            }}
          ></i>
        </div>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default NavBar;
