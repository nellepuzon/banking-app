import React, {useState} from "react";

function AddAccount({setAccounts, accounts}) {

    const [fullName, setFullName] = useState('')
    const [balance, setBalance] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
        const userNameMatch = accounts.find(element => element.userName === userName)
        const fullNameMatch = accounts.find(element => element.fullName === fullName)

        if (userNameMatch && !fullNameMatch && fullName !== '' && userName !== '' && password !== '' && balance !== '') {
            setErrorMessage({message:"username already exists"})
        } else if (fullNameMatch && !userNameMatch && fullName !== '' && userName !== '' && password !== '' && balance !== '') {
            setErrorMessage({message:"full name already exists"})
        } else if (userNameMatch && fullNameMatch && fullName !== '' && userName !== '' && password !== '' && balance !== '') {
            setErrorMessage({message:"account already exists"})
        } else if (fullName !== '' && balance !== '' && !userNameMatch && !fullNameMatch) {
            let test = Math.floor(Math.random()*100000000)
            console.log(test)
            setAccounts([...accounts, { userName: userName, password: password, type: 'user', fullName: fullName, money: balance, accountNumber: test }])
            localStorage.setItem("accounts", JSON.stringify([...accounts, { userName: userName, password: password, type: 'user', fullName: fullName, money: balance, accountNumber: test }]))
            setFullName('');
            setBalance('');
            setUserName('');
            setPassword('');
        } else {
            setErrorMessage({message:"fill out necessary information"})
        }
    }
    const renderError = () => {
        if(errorMessage) {
            return <div className='error-message'>{errorMessage.message}</div>
          }
    } 
    return (
        <div className="add-account-container">
            {renderError()}
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