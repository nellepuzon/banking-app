import "../src/styles/output.css";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
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

  return (
      <Routes>
        {!isAdmin && !loggedIn && (
          <Route
            path="/*"
            element={
              <LoginPage
                setIsAdmin={setIsAdmin}
                accounts={accounts}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                userInput={userInput}
                setUserInput={setUserInput}
                passInput={passInput}
                setPassInput={setPassInput}
              />
            }
          />
        )}
        {isAdmin && loggedIn && (
          <Route
            path="/admin"
            element={
              <AdminPage
                accounts={accounts}
                setAccounts={setAccounts}
                setIsAdmin={setIsAdmin}
                setLoggedIn={setLoggedIn}
                setUserInput={setUserInput}
                setPassInput={setPassInput}
                isAdmin={isAdmin}
              />
            }
          />
        )}
        {!isAdmin && loggedIn && (
          <Route
            path="/user"
            element={
              <UserPage
                accounts={accounts}
                setAccounts={setAccounts}
                setIsAdmin={setIsAdmin}
                setLoggedIn={setLoggedIn}
                userInput={userInput}
                setUserInput={setUserInput}
                setPassInput={setPassInput}
                isAdmin={isAdmin}
              />
            }
          />
        )}
      </Routes>
  );
}

export default App;
