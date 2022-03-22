import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';

function BudgetApp({
  balance,
  user,
  accounts,
  setAccounts,
  fullName,
  userExpenses,
  onAddExpense,
}) {
  const [beforeBalance, setBeforeBalance] = useState(balance - userExpenses);
  const [expense, setExpense] = useState(user.expense);
  const [totalExpense, setTotalExpense] = useState(userExpenses);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleAddItem = (e) => {
    setName(e.target.value);
  };

  const handleAddCost = (e) => {
    setCost(e.target.value);
  };

  const handleExpense = () => {
    if (name !== '' && cost !== '') {
      setExpense([...expense, { name: name, cost: cost }]);
      setTotalExpense((prev) => Number(prev) + Number(cost));
      setBeforeBalance((prev) => Number(prev) - Number(cost));
      setCost('');
      setName('');
    }
  };

  useEffect(() => {
    onAddExpense(beforeBalance);
  }, [beforeBalance]);

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleExpense();
    }
  };

  useEffect(() => {
    user.userExpenses = totalExpense;
    const userCopy = { ...user, expense: [...expense] };
    const newUsers = accounts.map((account) =>
      account.fullName === fullName ? { ...userCopy } : account
    );
    setAccounts(newUsers);
  }, [totalExpense]);

  return (
    <div className='budget-app-container'>
      {/* <div className="budget-app-title">Budget App</div>
      <div className="wallet">
        <div className="wallet-amount">
          <i className="fa-solid fa-peso-sign big"/>
          {beforeBalance}
        </div>
      </div> */}
      <div className='expenses'>
        <div className='expenses-title'>Expenses</div>
        <div className='expenses-list'>
          {user.expense &&
            user.expense.map((expense) => {
              return (
                <ExpenseItem
                  key={Math.floor(Number(user.accountNumber) * Math.random())}
                  name={expense.name}
                  cost={expense.cost}
                  user={user}
                  accounts={accounts}
                  setAccounts={setAccounts}
                  fullName={fullName}
                  userExpenses={userExpenses}
                />
              );
            })}
          <ul className='add-ul'>
            <li>
              <input
                className='add-expense-list'
                placeholder='Add Item'
                value={name}
                onKeyPress={handleEnter}
                onChange={handleAddItem}
              />
              <input
                className='input-cost'
                type='number'
                placeholder='Cost'
                value={cost}
                onKeyPress={handleEnter}
                onChange={handleAddCost}
              />
              <i class='fa-solid fa-circle-plus add-icon'></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
