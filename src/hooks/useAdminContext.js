import { useContext } from "react";
import AdminContext from "../context/AdminDataContext";

const useAdminContext = () => {
    return useContext(AdminContext)
}

export default useAdminContext;