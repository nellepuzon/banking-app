import React from "react";


function TableRow({account, setAccounts, accounts}) {
  const handleDelete = (id) => {
    const newUsers = accounts.filter((user) => user.accountNumber !== id)
    console.log(newUsers)
    setAccounts(newUsers)
    localStorage.setItem("accounts", JSON.stringify([...newUsers]))
  }
    return (
    <tr>
      <td>
        <a href="#">{account.accountNumber}</a>
      </td>
        <td>
          <a id='account-name' href='#'>{account.fullName}</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> {account.money}
        </td>
        <div className='edit-delete'>
        <i className="fa-solid fa-pen-to-square edit-button"></i>
        <i className="fa-solid fa-trash-can delete-button" onClick={() =>{handleDelete(account.accountNumber)}}></i></div>
    </tr>
    )
}

export default TableRow