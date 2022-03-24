import './assets/styles/output.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCheck from './components/login-page/LoginCheck';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<LoginCheck />}>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/user/:userInput' element={<UserPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
}

export default App;
