import React from "react";
import ExpenseItem from "./ExpenseItem";

function showDelete() {
  document.querySelector(".fa-trash-can").classList.toggle("show");
  document.querySelector(".fa-pen-to-square").classList.toggle("show");
}

function showPay() {
  document.querySelector(".pay-button").classList.toggle("show");
  document.querySelector(".cost").classList.toggle("border-radius");
}

function BudgetApp() {
  return (
    <div className="budget-app-container">
      <div className="budget-app-title">Budget App</div>
      <div className="wallet">
        <div className="wallet-amount">
          <i className="fa-solid fa-peso-sign big"></i>2000
        </div>
      </div>
      <div className="expenses">
        <div className="expenses-title">Expenses</div>
        <div className="expenses-list">
          <ExpenseItem showDelete={showDelete} showPay={showPay} name={'Spotify'} cost={'149'}/>
          <ExpenseItem showDelete={showDelete} showPay={showPay} name={'Internet'} cost={'1299'}/>
          <ul>
            <li>
              <input className="add-expense-list" placeholder="Add Expense" />
            </li>
            <li>
              <input className="input-cost" placeholder="Cost"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
