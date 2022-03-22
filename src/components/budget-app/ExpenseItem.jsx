import React, { useState } from 'react';

function ExpenseItem({ name, cost, user, accounts, setAccounts, fullName }) {
  const [isToggle, setToggle] = useState(false);
  const [isTogglePay, setTogglePay] = useState(false);
  

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const handleTogglePay = () => {
    setTogglePay(!isTogglePay)
  }

  function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
  }

  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }

  const handlePay =() => {
    let id = generateId(20);
    user.money -= cost
    const newUsers = accounts.map((account) => 
      account.fullName === fullName ? {...user, history: [...user.history, {id: id, type: 'Payment'}]} : account
    )
    setAccounts(newUsers)
  }

  return (
    <ul>
      <li onClick={handleToggle} className='expense-name' >
        {name}
      </li>
      <li >
        <li onClick={handlePay} className={`pay-button ${isTogglePay ? 'show' : ''}`}>Pay</li>
        <li onClick={handleTogglePay} className={`cost ${isTogglePay ? 'border-radius' : ''}`}>
        ₱{cost}
        </li>
          <i className={`fa-solid fa-pen-to-square edit-expense ${isToggle ? '' : 'transparent'}`}/>
        <i className={`fa-solid fa-trash-can delete-expense ${isToggle ? '' : 'transparent'}`}/>
      </li>
    </ul>
  );
}

export default ExpenseItem;
