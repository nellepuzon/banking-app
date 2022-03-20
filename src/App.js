import "../src/styles/output.css";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import DataContext from "./context/DataContext";

function App() {
  const { isAdmin, loggedIn } = useContext(DataContext);
  
  return (
    <Routes>
      {!isAdmin && !loggedIn && <Route path="/*" element={<LoginPage />} />}
      {isAdmin && loggedIn && <Route path="/admin" element={<AdminPage />} />}
      {!isAdmin && loggedIn && <Route path="/user" element={<UserPage />} />}
    </Routes>
  );
}

export default App;
