import React from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'

function AdminPage() {
    return (
        <div className="admin-page">
            <NavBar/>
            <Table/>
        </div>
    )
}

export default AdminPage;