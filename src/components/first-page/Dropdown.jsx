import React from "react";

function Dropdown() {
    return (
        <div className="dropdown">
        <button className="dropdown-button">Account Type <i className="fa-solid fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
            <a className="admin-option" href="#">Admin</a>
            <a className="user-option" href="#">User</a>
        </div>
    </div>

    )
}

export default Dropdown;