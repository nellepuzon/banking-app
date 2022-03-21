import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

function NavBar({ setSearchInput }) {
  const { setIsAdmin, setLoggedIn } = useContext(DataContext);

  const logOut = () => {
    setIsAdmin(false);
    setLoggedIn(false);
  };

  return (
    <div className="admin-dashboard">
      <div className="nav-bar">
        <div className="accounts">Accounts</div>
        <div className="sort-icon">
          <i
            className="fa-solid fa-right-from-bracket dashboard-icon"
            onClick={logOut}
          ></i>
        </div>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => {setSearchInput(e.target.value)}}
      ></input>
    </div>
  );
}

export default NavBar;
