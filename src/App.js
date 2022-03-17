import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import { useEffect, useState } from 'react';
import AdminPage from './components/AdminPage';
import AddAccount from './components/admin-page/AddAccount';
import Table from './components/admin-page/Table';
import UserPage from './components/UserPage';


function App() {
  // const [adminLogIn, setAdminLogIn] = useState({ userName: 'admin', password: 'admin123', type: 'admin' })
  const [accounts, setAccounts] = useState([{ userName: 'admin', password: 'admin123', type: 'admin' }]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  // const test = document.querySelector('.first-page')
  
  
  const showPage = () => {
    if (isAdmin === true && loggedIn === true) {
      return <AdminPage 
      accounts={accounts}
      setAccounts={setAccounts}
      setIsAdmin={setIsAdmin}
      setLoggedIn={setLoggedIn}
      setUserInput={setUserInput}
      setPassInput={setPassInput}
      />
    } else if (isAdmin === false && loggedIn === true) {
      const user = accounts.find((item)=>item.userName == userInput)
      return <UserPage
      accounts={accounts}
      setAccounts={setAccounts}
      setIsAdmin={setIsAdmin}
      setLoggedIn={setLoggedIn}
      fullName={user.fullName}
      balance={user.money}
      accountNumber={user.accountNumber}
      setUserInput={setUserInput}
      setPassInput={setPassInput}
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
  
  // useEffect(()=>{
  //   if (localStorage.getItem("accounts") === null) {
  //       localStorage.setItem("accounts", JSON.stringify([adminLogIn]))
  //       const test = JSON.parse(localStorage.getItem("accounts"))
  //       setAccounts(test)
  //     } else {
  //       const test = JSON.parse(localStorage.getItem("accounts"))
  //       setAccounts(test)
  //     }
  // },[App]);

  useEffect(()=>{
    if (localStorage.getItem("accounts") === null) {
      localStorage.setItem("accounts", JSON.stringify(accounts))
    } else {
      const accounts = JSON.parse(localStorage.getItem("accounts"))
      setAccounts(accounts)
    }
  },[App])

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
  