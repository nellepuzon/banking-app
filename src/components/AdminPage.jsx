import React from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'

function AdminPage(props) {
    return (
        <div className="admin-page">
            <NavBar/>
            <Table accounts={props.accounts}/>
        </div>
    )
}

export default AdminPage;