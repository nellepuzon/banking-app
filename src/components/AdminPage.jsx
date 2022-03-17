import React, { useState } from "react";
import NavBar from './admin-page/NavBar'
import Table from './admin-page/Table'
import AddAccount from './admin-page/AddAccount'
import Transactions from "./Transactions";
import Transfer from "./transaction-page/Transfer"
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";

function AdminPage(props) {
    const [fullName, setFullName] = useState('')
    const [balance, setBalance] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [searchInput, setSearchInput] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [editingID, setEditingID] = useState(0)
    return (
        <div className="admin-page">
            <NavBar 
            searchInput={searchInput} 
            setSearchInput={setSearchInput} 
            setIsAdmin={props.setIsAdmin} 
            setLoggedIn={props.setLoggedIn}
            setUserInput={props.setUserInput}
            setPassInput={props.setPassInput}
            />
            <Table 
            accounts={props.accounts} 
            searchInput={searchInput} 
            setAccounts={props.setAccounts}
            setFullName={setFullName}
            setBalance={setBalance}
            setUserName={setUserName}
            setPassword={setPassword}
            setEditingID={setEditingID}
            setIsEditing={setIsEditing}
            />
            <AddAccount 
            setAccounts={props.setAccounts}
            accounts={props.accounts}
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
            <Transactions isAdmin={props.isAdmin}/>
            <Deposit accounts={props.accounts} setAccounts={props.setAccounts} isAdmin={props.isAdmin}/>
            <Withdraw accounts={props.accounts} setAccounts={props.setAccounts} isAdmin={props.isAdmin}/>
            <Transfer accounts={props.accounts} setAccounts={props.setAccounts} isAdmin={props.isAdmin}/>
        </div>
    )
}

export default AdminPage;