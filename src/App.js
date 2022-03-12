import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import AdminPage from './components/AdminPage';

function App() {
  const [accounts, setAccounts] = useState([
    { userName: 'admin', password: 'admin123', type: 'admin' },
    { userName: 'user1', password: 'user1', type: 'user' },
    { userName: 'user2', password: 'user2', type: 'user' },
    { userName: 'user3', password: 'user3', type: 'user' },
  ]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const test = document.querySelector('.first-page')
console.log(test)
  const showPage = () => {
    if (isAdmin === true) {
      return <AdminPage />
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
