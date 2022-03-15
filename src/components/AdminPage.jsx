import React from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'
import AddAccount from './admin-page/AddAccount'
import Transactions from "./admin-page/Transactions";
import Transfer from "./transaction-page/Transfer"
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";

function AdminPage(props) {
    return (
        <div className="admin-page">
            <NavBar/>
            <Table accounts={props.accounts}/>
            <AddAccount 
            setAccounts={props.setAccounts}
            accounts={props.accounts}/>
            <Transactions/>
            <Deposit accounts={props.accounts} setAccounts={props.setAccounts}/>
            <Withdraw accounts={props.accounts} setAccounts={props.setAccounts}/>
            <Transfer accounts={props.accounts} setAccounts={props.setAccounts}/>
        </div>
    )
}

export default AdminPage;