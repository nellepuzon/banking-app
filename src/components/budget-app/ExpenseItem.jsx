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

  const handlePay =() => {
    user.money -= cost
    const newUsers = accounts.map((account) => 
      account.fullName === fullName ? {...user} : account
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
