import React, { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import NavBar from "./admin-page/NavBar";
import Table from "./admin-page/Table";
import AddAccount from "./admin-page/AddAccount";
import Transactions from "./Transactions";
import Transfer from "./transaction-page/Transfer";
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";
import { AdminDataProvider } from "../context/AdminDataContext";

function AdminPage() {
  return (
    <AdminDataProvider>
      <div className="admin-page">
        <NavBar />
        <Table />
        <AddAccount />
        <Transactions />
        <Deposit />
        <Withdraw />
        <Transfer />
      </div>
    </AdminDataProvider>
  );
}

export default AdminPage;
