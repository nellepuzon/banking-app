import React, { useState } from 'react';
import generateId from '../../helpers/generateID';
import useDataContext from '../../hooks/useDataContext';

function ExpenseItem({
  name,
  cost,
  user,
  fullName,
  expense,
  setExpense,
  setBeforeBalance,
  setTotalExpense,
  onEdit,
}) {
  const {accounts, updateAccounts} = useDataContext()
  const [isToggle, setToggle] = useState(false);
  const [isTogglePay, setTogglePay] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const handleTogglePay = () => {
    setTogglePay(!isTogglePay);
  };

  const handlePay = () => {
    let id = generateId(20);
    user.money -= cost;
    const newUsers = accounts.map((account) =>
      account.fullName === fullName
        ? { ...user, history: [...user.history, { id: id, type: 'Payment' }] }
        : account
    );
    updateAccounts(newUsers);
    setBeforeBalance(user.money - user.userExpenses);
  };

  const handleDelete = (expense) => {
    const newExpenseList = user.expense.filter((item) => item !== expense);
    user.expense = newExpenseList;
    setExpense(user.expense);
    setTotalExpense((prev) => Number(prev) - Number(cost));
    setBeforeBalance((prev) => Number(prev) + Number(cost));
    const userCopy = { ...user };
    const newUsers = accounts.map((account) =>
      account.fullName === fullName ? { ...userCopy } : account
    );
    updateAccounts(newUsers);
  };

  return (
    <ul>
      <li onClick={handleToggle} className='expense-name'>
        {name}
      </li>
      <li>
        <li
          onClick={handlePay}
          className={`pay-button ${isTogglePay ? 'show' : ''}`}
        >
          Pay
        </li>
        <li
          onClick={handleTogglePay}
          className={`cost ${isTogglePay ? 'border-radius' : ''}`}
        >
          ₱{cost}
        </li>
        <i
          onClick={() => onEdit(expense)}
          className={`fa-solid fa-pen-to-square edit-expense ${
            isToggle ? '' : 'transparent'
          }`}
        />
        <i
          onClick={() => handleDelete(expense)}
          className={`fa-solid fa-trash-can delete-expense ${
            isToggle ? '' : 'transparent'
          }`}
        />
      </li>
    </ul>
  );
}

export default ExpenseItem;
