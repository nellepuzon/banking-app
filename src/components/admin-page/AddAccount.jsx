import React from "react";

function AddAccount() {
    return (
        <div className="add-account-container">
            <div className="add-account-inputs">
            <input className="input-fullname" type="text" placeholder="Full Name" spellCheck="false"></input>
            <span className="peso-sign"><i className='fa-solid fa-peso-sign'></i> </span><input className="input-balance" type="number" placeholder="Initial Balance"></input>
            </div>
            <button className="add-account-button">Add Account</button>
        </div>
    )
}

export default AddAccount;