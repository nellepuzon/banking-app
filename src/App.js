import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import { useEffect, useState } from 'react';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';


function App() {
  const [accounts, setAccounts] = useState([{ userName: 'admin', password: 'admin123', type: 'admin' }]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  
  
  const showPage = () => {
    if (isAdmin === true && loggedIn === true) {
      return <AdminPage 
      accounts={accounts}
      setAccounts={setAccounts}
      setIsAdmin={setIsAdmin}
      setLoggedIn={setLoggedIn}
      setUserInput={setUserInput}
      setPassInput={setPassInput}
      isAdmin={isAdmin}
      />
    } else if (isAdmin === false && loggedIn === true) {
      const user = accounts.find((item)=>item.userName == userInput)
      return <UserPage
      accounts={accounts}
      setAccounts={setAccounts}
      setIsAdmin={setIsAdmin}
      setLoggedIn={setLoggedIn}
      user={user}
      fullName={user.fullName}
      balance={user.money}
      accountNumber={user.accountNumber}
      userExpenses={user.userExpenses}
      setUserInput={setUserInput}
      setPassInput={setPassInput}
      isAdmin={isAdmin}
      />
    }
    else {
      return  <LoginPage
      isAdmin={isAdmin}
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
  };

  useEffect(()=>{
    if (localStorage.getItem("accounts") === null) {
      localStorage.setItem("accounts", JSON.stringify(accounts))
    } else {
      const accounts = JSON.parse(localStorage.getItem("accounts"))
      setAccounts(accounts)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("accounts", JSON.stringify(accounts))
  },[accounts])
  



  return (
    <div className='App'>
      {showPage()};
    </div>
    
    );
  }

  export default App;
  