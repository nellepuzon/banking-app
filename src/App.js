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

  const showAdminPage = () => {
    if (isAdmin == true) {
      return (<AdminPage />,
      document.querySelector('first-page').classList.add("hide-first-page"))
    }
  };

  return (
    <div className='App'>
      <LoginPage
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        accounts={accounts}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      {showAdminPage()};
    </div>
  );
}

export default App;
