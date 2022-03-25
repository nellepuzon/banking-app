import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import Transactions from '../components/transaction-page/Transactions';
import TransHistory from '../components/transaction-page/TransHistory';
import BudgetApp from '../components/budget-app/BudgetApp';
import { useParams } from 'react-router-dom';
import BankLogo from '../components/login-page/BankLogo';
import mastercard from '../assets/images/mastercard.png';

function UserPage() {
  const { userInput } = useParams();
  const { userLogin, accounts, setAccounts } = useContext(DataContext);
  const user = accounts.find((item) => item.userName == userInput);
  const fullName = user.fullName;
  const balance = user.money;
  const accountNumber = user.accountNumber;
  const userExpenses = user.userExpenses;
  const transactions = user.history;
  const name = fullName.split(',');

  const [mockBalance, setMockBalance] = useState(balance - userExpenses);

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
          Welcome back, <span>{name[1]}</span>!
        </div>
        <div className='avatar'>
          <div>
            <i className='fa-solid fa-user-tie'></i>
          </div>
          <div>
            <i
              onClick={() => {
                userLogin(false);
              }}
              className='fa-solid fa-arrow-right-from-bracket user-logout'
            ></i>
          </div>
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
                <div className='card-name'>{`${name[1]}  ${name[0]}`}</div>
                <div className='card-number'>{accountNumber}</div>
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
                {transactions &&
                  transactions.map((item) => {
                    return (
                      <TransHistory
                        key={Math.floor(Number(accountNumber) * Math.random())}
                        item={item}
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

        <div className='right-container'>
          <div className='user-budget-app'>
            <BudgetApp
              balance={balance}
              user={user}
              accounts={accounts}
              setAccounts={setAccounts}
              fullName={fullName}
              userExpenses={userExpenses}
              onAddExpense={handleBudgetBalance}
            />
          </div>
          <div className='user-transaction'>
            <div className='user-transaction-title'>Transactions</div>

            <Transactions className='mobile' accountNumber={accountNumber}/>
          </div>
        </div>
      </div>

      <div className='user-footer'>
        <div className='bottom-nav'>
          <div className='nav-text'>Available Balance</div>
          <div className='balance'>PHP {balance}</div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
