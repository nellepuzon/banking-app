import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import Transactions from './Transactions';
import Deposit from './transaction-page/Deposit';
import Withdraw from './transaction-page/Withdraw';
import Transfer from './transaction-page/Transfer';
import BudgetApp from './budget-app/BudgetApp';
import { useParams } from 'react-router-dom';
import BankLogo from './login-page/BankLogo';
import mastercard from './mastercard.png';

function UserPage() {
  const { userInput } = useParams();
  const { userLogin, accounts, setAccounts } = useContext(DataContext);
  const USER = accounts.find((item) => item.userName == userInput);
  const FULLNAME = USER.fullName;
  const BALANCE = USER.money;
  const ACCOUNTNUMBER = USER.accountNumber;
  const USEREXPENSES = USER.userExpenses;
  const NAME = FULLNAME.split(',');

  const [mockBalance, setMockBalance] = useState(BALANCE - USEREXPENSES);

  const handleBudgetBalance = (value) => {
    setMockBalance(value);
  };

  function showBudgetApp() {
    document.querySelector('.top-bar').classList.add('hide');
    document.querySelector('.card-container').classList.add('hide');
    document.querySelector('.transactions').classList.add('hide');
    document.querySelector('.manage-payments').classList.add('hide');
    document.querySelector('.budget-app-container').classList.add('show');
  }

  return (
    <div className='third-page'>
      <header>
        <div className='user-nav'>
          <BankLogo />
          <i
            onClick={() => {
              userLogin(false);
            }}
            className='fa-solid fa-arrow-right-from-bracket'
          ></i>
        </div>
      </header>
      <div className='welcome'>
        <div className='greeting'>
          Welcome back, <span>{NAME[1]}</span>!
        </div>
        <div className='avatar'>
          <i className='fa-solid fa-user-tie'></i>
        </div>
      </div>

      <div className='container'>
        <div className='left-container'>
          <div className='card'>
            <div className='top-card'>
              <div className='balance-name'>Balance</div>
              <img src={mastercard} className='mastercard' />
            </div>
            <div className='card-balance'>₱{mockBalance}</div>
            <div className='bottom-card'>
              <div className='bottom-left-card'>
                <div className='card-name'>{`${NAME[1]}  ${NAME[0]}`}</div>
                <div className='card-number'>{ACCOUNTNUMBER}</div>
              </div>
              <div className='bottom-right-card'>
                <div className='valid-thru'>
                  VALID
                  <br />
                  THRU
                </div>
                <div className='valid-date'>03/24</div>
              </div>
            </div>
          </div>
          <div onClick={showBudgetApp} className='manage-expenses'>
            Manage Expenses
          </div>
          <div className='transaction-history'>
            <div className='history-title'>Transaction History</div>
            <div className='transaction-list'>
              <ul>
                <li>Payment</li>
                <li>Deposit</li>
                <li>Withdraw</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='right-container'>
          <div className='user-budget-app'>
            <BudgetApp
              balance={BALANCE}
              user={USER}
              accounts={accounts}
              setAccounts={setAccounts}
              fullName={FULLNAME}
              userExpenses={USEREXPENSES}
              onAddExpense={handleBudgetBalance}
            />
          </div>
          <div className='user-transaction'>
            <div className='user-transaction-title'>Transactions</div>

            <Transactions className='mobile' />
            <Deposit ACCOUNTNUMBER={ACCOUNTNUMBER} />
            <Withdraw ACCOUNTNUMBER={ACCOUNTNUMBER} />
            <Transfer ACCOUNTNUMBER={ACCOUNTNUMBER} />
          </div>
        </div>
      </div>

      <div className='user-footer'>
        <div className='bottom-nav'>
          <div className='nav-text'>Available Balance</div>
          <div className='balance'>PHP {BALANCE}</div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
