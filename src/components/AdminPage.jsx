import React from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'
import AddAccount from './admin-page/AddAccount'
import Transactions from "./admin-page/Transactions";
import Transfer from "./transaction-page/Transfer"

function AdminPage(props) {
    return (
        <div className="admin-page">
            <NavBar/>
            <Table accounts={props.accounts}/>
            <AddAccount 
            setAccounts={props.setAccounts}
            accounts={props.accounts}/>
            <Transactions/>
            <Transfer/>
        </div>
    )
}

export default AdminPage;