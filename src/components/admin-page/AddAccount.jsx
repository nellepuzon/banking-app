import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";

function AddAccount({
  fullName,
  setFullName,
  balance,
  setBalance,
  userName,
  setUserName,
  password,
  setPassword,
  isEditing,
  setIsEditing,
  editingID,
}) {
  const { accounts, setAccounts } = useContext(DataContext);
  const [errorMessage, setErrorMessage] = useState("");

  const editUser = (id) => {
    const selectedUser = accounts.find((user) => user.accountNumber === id);
    selectedUser.userName = userName;
    selectedUser.fullName = fullName;
    selectedUser.password = password;
    selectedUser.money = balance;
    const updatedUsers = accounts.map((user) =>
      user.accountNumber === id ? { ...selectedUser } : user
    );
    setAccounts(updatedUsers);
    localStorage.setItem("accounts", JSON.stringify([...updatedUsers]));
    setFullName("");
    setUserName("");
    setPassword("");
    setBalance("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddAccount();
    }
  };

  const handleAddAccount = (e) => {
    const userNameMatch = accounts.find(
      (element) => element.userName === userName
    );
    const fullNameMatch = accounts.find(
      (element) => element.fullName === fullName
    );

    if (isEditing) {
      editUser(editingID);
      setIsEditing(false);
      return;
    }

    if (
      userNameMatch &&
      !fullNameMatch &&
      fullName !== "" &&
      userName !== "" &&
      password !== "" &&
      balance !== ""
    ) {
      setErrorMessage({ message: "username already exists" });
    } else if (
      fullNameMatch &&
      !userNameMatch &&
      fullName !== "" &&
      userName !== "" &&
      password !== "" &&
      balance !== ""
    ) {
      setErrorMessage({ message: "full name already exists" });
    } else if (
      userNameMatch &&
      fullNameMatch &&
      fullName !== "" &&
      userName !== "" &&
      password !== "" &&
      balance !== ""
    ) {
      setErrorMessage({ message: "account already exists" });
    } else if (
      fullName !== "" &&
      balance !== "" &&
      !userNameMatch &&
      !fullNameMatch
    ) {
      let test = Math.floor(Math.random() * 100000000);
      setAccounts([
        ...accounts,
        {
          userName: userName,
          password: password,
          type: "user",
          fullName: fullName,
          money: balance,
          accountNumber: test,
          userExpenses: 0,
          expense: [],
        },
      ]);
      setFullName("");
      setBalance("");
      setUserName("");
      setPassword("");
      setErrorMessage("");
    } else {
      setErrorMessage({ message: "fill out necessary information" });
    }
  };

  const renderError = () => {
    if (errorMessage) {
      return <div className="error-message">{errorMessage.message}</div>;
    }
  };
  return (
    <div className="add-account-container">
      {renderError()}
      <div className="add-account-inputs">
        <input
          className="input-username"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {setUserName(e.target.value)}}
          onKeyPress={handleKeyPress}
        ></input>
        <input
          className="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <div className="add-account-inputs">
        <input
          className="input-fullname"
          type="text"
          placeholder="Full Name"
          spellCheck="false"
          value={fullName}
          onChange={(e) => {setFullName(e.target.value)}}
          onKeyPress={handleKeyPress}
        ></input>
        <input
          className="input-balance"
          type="number"
          placeholder="Initial Balance"
          value={balance}
          onChange={(e) => {setBalance(e.target.value)}}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <button onClick={handleAddAccount} className="add-account-button">
        {isEditing ? "Edit" : "Add"} Account
      </button>
    </div>
  );
}

export default AddAccount;
