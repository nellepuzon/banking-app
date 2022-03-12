import React from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'
import AddAccount from './admin-page/AddAccount'

function AdminPage(props) {
    return (
        <div className="admin-page">
            <NavBar/>
            <Table accounts={props.accounts}/>
            <AddAccount />
        </div>
    )
}

export default AdminPage;