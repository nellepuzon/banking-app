import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import generateId from "../../helpers/generateID";

function ExpenseItem({
  name,
  cost,
  user,
  accounts,
  setAccounts,
  fullName,
  expense,
  setExpense,
  setBeforeBalance,
  setTotalExpense
}) {
  const [isToggle, setToggle] = useState(false);
  const [isTogglePay, setTogglePay] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };
  
  const handleTogglePay = () => {
    setTogglePay(!isTogglePay);
    // console.log(user.money)
  };

  const handlePay = () => {
    let id = generateId(20);
    user.money -= cost;
    const newUsers = accounts.map((account) =>
    account.fullName === fullName
    ? { ...user, history: [...user.history, { id: id, type: "Payment" }] }
    : account
    );
    setAccounts(newUsers);
    setBeforeBalance(user.money)
  };
  
  const handleDelete = (expense) => {
    const test = user.expense.filter((item) => item !== expense);
    user.expense = test
    setExpense(user.expense)
    setTotalExpense((prev) => Number(prev) - Number(cost));
    setBeforeBalance((prev) => Number(prev) + Number(cost));
    const userCopy = { ...user };
    const newUsers = accounts.map((account) =>
    account.fullName === fullName ? { ...userCopy } : account
    );
    setAccounts(newUsers);
    setBeforeBalance(user.money)
  };

  return (
    <ul>
      <li onClick={handleToggle} className="expense-name">
        {name}
      </li>
      <li>
        <li
          onClick={handlePay}
          className={`pay-button ${isTogglePay ? "show" : ""}`}
        >
          Pay
        </li>
        <li
          onClick={handleTogglePay}
          className={`cost ${isTogglePay ? "border-radius" : ""}`}
        >
          ₱{cost}
        </li>
        <i
          className={`fa-solid fa-pen-to-square edit-expense ${
            isToggle ? "" : "transparent"
          }`}
        />
        <i
          onClick={() => handleDelete(expense)}
          className={`fa-solid fa-trash-can delete-expense ${
            isToggle ? "" : "transparent"
          }`}
        />
      </li>
    </ul>
  );
}

export default ExpenseItem;
