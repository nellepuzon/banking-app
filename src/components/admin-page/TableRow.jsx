import React from "react";


function TableRow({account}) {
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
        <i className="fa-solid fa-trash-can delete-button"></i></div>
 </tr>
    )
}

export default TableRow