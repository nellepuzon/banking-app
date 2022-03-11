import '../src/styles/output.css';
import LoginPage from './components/LoginPage';
import {useState} from 'react';

function App() {
  const [accounts, setAccounts] = useState([
    {userName:"user1", password:"user1"},
    {userName:"user2", password:"user2"},
    {userName:"user3", password:"user3"}
  ])
const [adminPassword, setAdminPassword] = useState("admin123")
const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <LoginPage
      accounts={accounts}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
      adminPassword={adminPassword}
      />
    </div>
  );
}

export default App;
