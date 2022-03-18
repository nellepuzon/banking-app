import React, { useState } from 'react';

function ExpenseItem({ name, cost }) {
  const [isToggle, setToggle] = useState(false);
  const [isTogglePay, setTogglePay] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const handleTogglePay = () => {
    setTogglePay(!isTogglePay)
  }

  return (
    <ul>
      <li onClick={handleToggle}>
        {name}{' '}
        <i
          className={`fa-solid fa-pen-to-square ${isToggle ? '' : 'hide'}`}
        ></i>
        <i className={`fa-solid fa-trash-can  ${isToggle ? '' : 'hide'}`}></i>
      </li>
      <li>
        <li className={`pay-button ${isTogglePay ? '' : 'hide'}`}>Pay</li>
        <li onClick={handleTogglePay} className={`cost ${isTogglePay ? 'border-radius' : ''}`}>
          <i className='fa-solid fa-peso-sign big small'></i>
          {cost}
        </li>
      </li>
    </ul>
  );
}

export default ExpenseItem;
