import React from "react";

function ExpenseItem({showDelete, showPay, name, cost}) {

    return(
        <ul>
            <li onClick={showDelete}>
              {name} <i className='fa-solid fa-pen-to-square'></i>{' '}
              <i className='fa-solid fa-trash-can'></i>
            </li>
            <li>
              <li className='pay-button'>Pay</li>
              <li onClick={showPay} className='cost'>
                <i className='fa-solid fa-peso-sign small'></i>{cost}
              </li>
            </li>
        </ul>
    )
}

export default ExpenseItem