import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import Transactions from "./Transactions";
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";
import Transfer from "./transaction-page/Transfer";
import BudgetApp from "./budget-app/BudgetApp";
import { useParams } from "react-router-dom";
import Header from "./login-page/Header";
import BankLogo from "./login-page/BankLogo";
function UserPage() {
  const { userInput } = useParams();
  const { userLogin, accounts, setAccounts } = useContext(DataContext);
  const USER = accounts.find((item) => item.userName == userInput);
  const FULLNAME = USER.fullName;
  const BALANCE = USER.money;
  const ACCOUNTNUMBER = USER.accountNumber;
  const USEREXPENSES = USER.userExpenses;
  const NAME = FULLNAME.split(",");
  
  const [mockBalance, setMockBalance] = useState(BALANCE - USEREXPENSES)

  const handleBudgetBalance = value => {
    setMockBalance(value)
  }

  function showBudgetApp() {
    document.querySelector(".top-bar").classList.add("hide");
    document.querySelector(".card-container").classList.add("hide");
    document.querySelector(".transactions").classList.add("hide");
    document.querySelector(".manage-payments").classList.add("hide");
    document.querySelector(".budget-app-container").classList.add("show");
  }

  return (
    <div className="third-page">
      <header>
        <div className="user-nav">
          <BankLogo />
          <i
            onClick={() => {
              userLogin(false);
            }}
            className="fa-solid fa-arrow-right-from-bracket"
          ></i>
        </div>
      </header>
      <div className="welcome">
        <div className="greeting">
          Welcome back, <span>{NAME[1]}</span>!
        </div>
        <div className="avatar">
          <i className="fa-solid fa-user-tie"></i>
        </div>
      </div>

      <div className="container">
        <div className="left-container">
          <div className="card">
            <div className="card-balance">{mockBalance}</div>
            <div className="card-name">{`${NAME[1]}  ${NAME[0]}`}</div>
            <div className="card-number">{ACCOUNTNUMBER}</div>
          </div>
          <div onClick={showBudgetApp} className="manage-expenses">
            Manage Expenses
          </div>
          <Transactions className="mobile" />
          <Deposit ACCOUNTNUMBER={ACCOUNTNUMBER} />
          <Withdraw ACCOUNTNUMBER={ACCOUNTNUMBER} />
          <Transfer ACCOUNTNUMBER={ACCOUNTNUMBER} />
        </div>

        <div className="right-container">
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
      </div>

      <div className="bottom-nav">
        <div className="nav-text">Available Balance</div>
        <div className="balance">PHP {BALANCE}</div>
      </div>
    </div>
  );
}

export default UserPage;
