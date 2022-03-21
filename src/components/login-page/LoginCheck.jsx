import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const LoginCheck = () => {
    const {isAdmin, loggedIn} = useContext(DataContext)
    const location = useLocation()
    if (isAdmin && loggedIn || !isAdmin && loggedIn) {
        return <Outlet />
    } else{
        return <Navigate to="/login" state={{from: location}} replace/>
    }
}

export default LoginCheck;