import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Transactions from "./Transactions";
import Deposit from "./transaction-page/Deposit";
import Withdraw from "./transaction-page/Withdraw";
import Transfer from "./transaction-page/Transfer";
import BudgetApp from "./budget-app/BudgetApp";
import { useParams } from "react-router-dom";
function UserPage() {
  const {userInput} = useParams()
  const { setIsAdmin, setLoggedIn, accounts, setAccounts, isAdmin } = useContext(DataContext);
  const USER = accounts.find((item) => item.userName == userInput);
  const FULLNAME = USER.fullName;
  const BALANCE = USER.money;
  const ACCOUNTNUMBER = USER.accountNumber;
  const USEREXPENSES = USER.userExpenses;
  const NAME = FULLNAME.split(",");

  const logOut = () => {
    setIsAdmin(false);
    setLoggedIn(false);
  };

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
        <div className="dashboard">
          Dashboard
          <i
            onClick={logOut}
            className="fa-solid fa-arrow-right-from-bracket"
          ></i>
        </div>
      </header>
      <div className="top-bar">
        <div className="greeting">
          Welcome back, <span>{NAME[1]}</span>!
        </div>
        <div className="avatar">
          <i className="fa-solid fa-user-tie"></i>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-logo">
            <div className="second-icon">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="logo-name">
              React<span>Bank</span>
            </div>
          </div>
          <div className="card-design">
            <div className="chip">
              <div className="chip-cell-1"></div>
              <div className="chip-cell-2"></div>
              <div className="chip-cell-3"></div>
              <div className="chip-cell-4"></div>
              <div className="chip-cell-5"></div>
              <div className="chip-cell-6"></div>
              <div className="chip-cell-7"></div>
              <div className="chip-cell-8"></div>
              <div className="chip-cell-9"></div>
            </div>
            <div className="wifi">
              <i className="fa-solid fa-wifi"></i>
            </div>
          </div>
          <div className="card-name">{`${NAME[1]}  ${NAME[0]}`}</div>
          <div className="card-number">{ACCOUNTNUMBER}</div>
        </div>
      </div>

      <div onClick={showBudgetApp} className="manage-payments">
        Manage Expenses
      </div>

      <Transactions isAdmin={isAdmin} className="mobile" />
      <Deposit accountNumber={ACCOUNTNUMBER} />
      <Withdraw accountNumber={ACCOUNTNUMBER} />
      <Transfer accountNumber={ACCOUNTNUMBER} />

      <BudgetApp
        balance={BALANCE}
        user={USER}
        accounts={accounts}
        setAccounts={setAccounts}
        fullName={FULLNAME}
        userExpenses={USEREXPENSES}
      />

      <div className="bottom-nav">
        <div className="nav-text">Available Balance</div>
        <div className="balance">PHP {BALANCE}</div>
      </div>
    </div>
  );
}

export default UserPage;
