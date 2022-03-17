import React from 'react';

function showDelete() {
  document.querySelector('.fa-trash-can').classList.toggle('show');
  document.querySelector('.fa-pen-to-square').classList.toggle('show');
}

function showPay() {
  document.querySelector('.pay-button').classList.toggle('show');
  document.querySelector('.cost').classList.toggle('border-radius');
}

function BudgetApp() {
  return (
    <div className='budget-app-container'>
      <div className='budget-app-title'>Budget App</div>
      <div className='wallet'>
        <div className='wallet-amount'>
          <i class='fa-solid fa-peso-sign'></i>2000
        </div>
      </div>
      <div className='expenses'>
        <div className='expenses-title'>Expenses</div>
        <div className='expenses-list'>
          <ul>
            <li onClick={showDelete}>
              Spotify <i class='fa-solid fa-pen-to-square'></i>{' '}
              <i class='fa-solid fa-trash-can'></i>
            </li>
            <li>
              <li className='pay-button'>Pay</li>
              <li onClick={showPay} className='cost'>
                <i class='fa-solid fa-peso-sign small'></i>149
              </li>
            </li>
          </ul>
          <ul>
            <li onClick={showDelete}>
              Netflix <i class='fa-solid fa-pen-to-square'></i>{' '}
              <i class='fa-solid fa-trash-can'></i>
            </li>
            <li>
              <li className='pay-button'>Pay</li>
              <li onClick={showPay} className='cost'>
                <i class='fa-solid fa-peso-sign small'></i>549
              </li>
            </li>{' '}
          </ul>
          <ul>
            <li onClick={showDelete}>
              House Rent <i class='fa-solid fa-pen-to-square'></i>{' '}
              <i class='fa-solid fa-trash-can'></i>
            </li>
            <li>
              <li className='pay-button'>Pay</li>
              <li onClick={showPay} className='cost'>
                <i class='fa-solid fa-peso-sign small'></i>3500
              </li>
            </li>{' '}
          </ul>
          <ul>
            <li onClick={showDelete}>
              Internet <i class='fa-solid fa-pen-to-square'></i>{' '}
              <i class='fa-solid fa-trash-can'></i>
            </li>
            <li>
              <li className='pay-button'>Pay</li>
              <li onClick={showPay} className='cost'>
                <i class='fa-solid fa-peso-sign small'></i>1299
              </li>
            </li>{' '}
          </ul>
          <ul>
            <li>
              <input className='add-expense-list' placeholder='Add' />
            </li>
            <li>
              <i class='fa-solid fa-plus'></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
