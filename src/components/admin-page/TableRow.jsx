import React from "react";

function TableRow({account}) {
    return (
    <tr>
        <td>
          <a className='eg' href='#'>{account.fullName}</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> {account.money}
        </td>
    </tr>
    )
}

export default TableRow