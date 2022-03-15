import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import { useEffect, useState } from 'react';
import AdminPage from './components/AdminPage';
import AddAccount from './components/admin-page/AddAccount';


function App() {
  const [adminLogIn, setAdminLogIn] = useState({ userName: 'admin', password: 'admin123', type: 'admin' })
  const [accounts, setAccounts] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const test = document.querySelector('.first-page')
  const showPage = () => {
    if (isAdmin === true) {
      return <AdminPage 
      accounts={accounts}
      setAccounts={setAccounts}
      />
    } else if(isAdmin === false) {
      return  <LoginPage
      isAdmin={isAdmin}
      setIsAdmin={setIsAdmin}
      accounts={accounts}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
      />
      
    }
    
  };
  
  useEffect(()=>{
    if (localStorage.getItem("accounts") === null) {
        localStorage.setItem("accounts", JSON.stringify([adminLogIn]))
        const test = JSON.parse(localStorage.getItem("accounts"))
        setAccounts(test)
      } else {
        const test = JSON.parse(localStorage.getItem("accounts"))
        setAccounts(test)
      }
  },[App, AddAccount]);
  
  return (
    <div className='App'>
      {showPage()};
    </div>
    
    );
  }

  export default App;
  