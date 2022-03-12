import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

function AddAccount({setAccounts, accounts}) {

    const [fullName, setFullName] = useState('')
    const [balance, setBalance] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleFullName = (e) => {
        setFullName(e.target.value)
    }

    const handleBalance = (e) => {
        setBalance(e.target.value)
    }

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAddAccount = (e) => {
        e.preventDefault();

        if (fullName !== '' && balance !== '') {
            setAccounts([...accounts, { userName: userName, password: password, type: 'user', fullName: fullName, money: balance }])
            setFullName('');
            setBalance('');
            setUserName('');
            setPassword('');
        }
    }
    return (
        <div className="add-account-container">
            <div className="add-account-inputs">
                <input className="input-username" type="text" placeholder="Username" value={userName} onChange={handleUsername}></input>
                <input className="input-password" type="password" placeholder="Password" value={password} onChange={handlePassword}></input>
            </div>
            <div className="add-account-inputs">
            <input className="input-fullname" type="text" placeholder="Full Name" spellCheck="false" value={fullName} onChange={handleFullName}></input>
            <input className="input-balance" type="number" placeholder="Initial Balance" value={balance} onChange={handleBalance}></input>
            </div>
            <button onClick={handleAddAccount} className="add-account-button">Add Account</button>
        </div>
    )
}

export default AddAccount;