import React from 'react';

function Transactions() {
  return (
    <div class='transactions'>
      <div class='deposit trans'>
        <div class='deposit-icon icon'>
          <i class='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div class='deposit-text text'>Deposit</div>
      </div>

      <div class='withdraw trans'>
        <div class='withdraw-icon icon'>
          <i class='fa-solid fa-money-from-bracket'></i>
        </div>
        <div class='withdraw-text text'>Withdraw</div>
      </div>

      <div class='transfer trans'>
        <div class='transfer-icon icon'>
        <i class="fa-solid fa-money-from-bracket"></i>        </div>
        <div class='transfer-text text'>Transfer</div>
      </div>
    </div>
  );
}

export default Transactions;
