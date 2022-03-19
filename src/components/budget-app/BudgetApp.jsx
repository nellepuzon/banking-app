import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';

function BudgetApp({balance}) {
  const [expense, setExpense] = useState([])
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const handleAddItem = (e) => {
    setName(e.target.value)
  }

  const handleAddCost = (e) => {
    setCost(e.target.value)
  }

  const handleExpense = () => {
    if (name !== '' && cost !== '') {
      setExpense([...expense, {name: name, cost: cost}])
      setName('')
      setCost('')
    }
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleExpense();
    }
  };

  return (
    <div className='budget-app-container'>
      <div className='budget-app-title'>Budget App</div>
      <div className='wallet'>
        <div className='wallet-amount'>
          <i className='fa-solid fa-peso-sign big'></i>{balance}
        </div>
      </div>
      <div className='expenses'>
        <div className='expenses-title'>Expenses</div>
        <div className='expenses-list'>
          <ExpenseItem name={'Spotify'} cost={'149'} />
          <ExpenseItem name={'Internet'} cost={'1299'} />
          {expense.map(expense => {return <ExpenseItem name={expense.name} cost={expense.cost}/>})}
          <ul>
            <li>
              <input className='add-expense-list' placeholder='Add Item' value={name} onKeyPress={handleEnter} onChange={handleAddItem}/>
            </li>
            <li>
              <input className='input-cost' type="number" placeholder='Cost' value={cost} onKeyPress={handleEnter} onChange={handleAddCost}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
