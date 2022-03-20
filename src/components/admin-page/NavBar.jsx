import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

function NavBar({ setSearchInput }) {
  const { setIsAdmin, setLoggedIn, setUserInput, setPassInput } = useContext(DataContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const logOut = () => {
    navigate("/");
    setIsAdmin(false);
    setLoggedIn(false);
    setUserInput("");
    setPassInput("");
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
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default NavBar;
