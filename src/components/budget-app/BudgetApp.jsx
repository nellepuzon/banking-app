import React, { useEffect, useState } from 'react';
import useDataContext from '../../hooks/useDataContext';
import ExpenseItem from './ExpenseItem';

function BudgetApp({
  balance,
  user,
  fullName,
  userExpenses,
  onAddExpense,
}) {
  const {accounts, updateAccounts} = useDataContext()
  const [beforeBalance, setBeforeBalance] = useState(balance - userExpenses);
  const [expense, setExpense] = useState(user.expense);
  const [totalExpense, setTotalExpense] = useState(userExpenses);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [editingID, setEditingID] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [expenseID, setExpenseID] = useState(0);

  const handleAddItem = (e) => {
    setName(e.target.value);
  };

  const handleAddCost = (e) => {
    setCost(e.target.value);
  };

  const handleExpense = () => {
    if (isEditing) {
      editExpense(editingID);
      setIsEditing(false);
      return;
    }

    if (name !== '' && cost !== '') {
      setExpense([...expense, { name: name, cost: cost, id: expenseID }]);
      setExpenseID((prev) => prev + 1);
      setTotalExpense((prev) => Number(prev) + Number(cost));
      setBeforeBalance((prev) => Number(prev) - Number(cost));
      setCost('');
      setName('');
    }
  };

  const editExpense = (expenseItem) => {
    const selectedExpense = user.expense.find(
      (expense) => expense.id === expenseItem
    );
    selectedExpense.name = name;
    selectedExpense.cost = cost;
    setBeforeBalance(balance - userExpenses);
    setBeforeBalance((prev) => Number(prev) - Number(cost));
    setTotalExpense((prev) => Number(prev) + Number(cost));
    const updatedList = user.expense.map((expense) =>
      expense.id === expenseItem ? { ...selectedExpense } : expense
    );
    user.expense = updatedList;
    const userCopy = { ...user };
    const newUsers = accounts.map((account) =>
      account.fullName === fullName ? { ...userCopy } : account
    );
    updateAccounts(newUsers);
    setCost('');
    setName('');
  };

  const handleEdit = (expenseItem) => {
    const selectedExpense = user.expense.find(
      (expense) => expense === expenseItem
    );
    setName(selectedExpense.name);
    setCost(selectedExpense.cost);
    setEditingID(selectedExpense.id);
    setTotalExpense((prev) => Number(prev) - Number(selectedExpense.cost));
    setIsEditing(true);
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
    updateAccounts(newUsers);
  }, [totalExpense]);

  useEffect(() => {
    setBeforeBalance(balance - userExpenses);
  }, [balance]);

  return (
    <div className='budget-app-container'>
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
                  updateAccounts={updateAccounts}
                  fullName={fullName}
                  userExpenses={userExpenses}
                  expense={expense}
                  setExpense={setExpense}
                  setBeforeBalance={setBeforeBalance}
                  setTotalExpense={setTotalExpense}
                  onEdit={handleEdit}
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
              <i
                onClick={handleExpense}
                className='fa-solid fa-circle-plus add-icon'
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
