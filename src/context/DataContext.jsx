import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
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
    

    return <DataContext.Provider value={{
        accounts, setAccounts, isAdmin, setIsAdmin,
        loggedIn, setLoggedIn, userInput, setUserInput,
        passInput, setPassInput
    }}>
        {children}
        </DataContext.Provider>
}

export default DataContext;