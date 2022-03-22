import "../src/styles/output.css";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginCheck from "./components/login-page/LoginCheck";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<LoginCheck />}>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user/:userInput" element={<UserPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
