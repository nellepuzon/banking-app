import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([
    { userName: "admin", password: "admin123", type: "admin" },
  ]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accounts") === null) {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    } else {
      const accounts = JSON.parse(localStorage.getItem("accounts"));
      setAccounts(accounts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const handleAdminLogIn = value => {
    setIsAdmin(value)
    setLoggedIn(value)
  }

  const handleUserLogin = value => {
    setLoggedIn(value)
  }

  const resetLoginInputs = () => {
    setUserInput("");
    setPassInput("");
  }

  const handleUsernameChange = value => {
    setUserInput(value)
  }

  const handlePasswordChange = value => {
    setPassInput(value)
  }

  const handleAccountsChange = values => {
    setAccounts(values)
  }

  return (
    <DataContext.Provider
      value={{
        accounts,
        isAdmin,
        loggedIn,
        userInput,
        passInput,
        setAccounts,
        userLogin: handleUserLogin,
        adminLogin: handleAdminLogIn,
        resetLogin: resetLoginInputs,
        onPassInput: handlePasswordChange,
        onUserInput: handleUsernameChange,
        updateAccounts: handleAccountsChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
