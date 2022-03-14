import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import AdminPage from './components/AdminPage';
import Transfer from './components/transaction-page/Transfer';


function App() {
  const [accounts, setAccounts] = useState([
    { userName: 'admin', password: 'admin123', type: 'admin', fullName:'Puzon, Junelle Master', money:1 },
    { userName: 'user1', password: 'user1', type: 'user', fullName:'Alipin', money: 654231 },
    { userName: 'user2', password: 'user2', type: 'user', fullName:'Go, Francis',money: 35121 },
    { userName: 'user3', password: 'user3', type: 'user', fullName:'Turingan, Jao',money: 35132 },
  ]);
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

  return (
    <div className='App'>
      {showPage()};
    </div>
    
  );
}

export default App;
