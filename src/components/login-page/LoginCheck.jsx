import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useDataContext from '../../hooks/useDataContext';

const LoginCheck = () => {
  const { isAdmin, loggedIn } = useDataContext()
  const location = useLocation();
  if ((isAdmin && loggedIn) || (!isAdmin && loggedIn)) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
};

export default LoginCheck;
