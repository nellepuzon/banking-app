import React, { useState } from "react";
import NavBar from "./admin-page/NavBar";
import Table from "./admin-page/Table";
import AddAccount from "./admin-page/AddAccount";
import Transactions from "./Transactions";
import Transfer from "./transaction-page/Transfer";
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";

function AdminPage(props) {
  const [fullName, setFullName] = useState("");
  const [balance, setBalance] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(0);
  return (
    <div className="admin-page">
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Table
        searchInput={searchInput}
        setFullName={setFullName}
        setBalance={setBalance}
        setUserName={setUserName}
        setPassword={setPassword}
        setEditingID={setEditingID}
        setIsEditing={setIsEditing}
      />
      <AddAccount
        fullName={fullName}
        setFullName={setFullName}
        balance={balance}
        setBalance={setBalance}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editingID={editingID}
      />
      <Transactions />
      <Deposit />
      <Withdraw />
      <Transfer />
    </div>
  );
}

export default AdminPage;
