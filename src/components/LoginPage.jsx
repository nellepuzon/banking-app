import React from "react";
import BankLogo from "./login-page/BankLogo";
import Dropdown from "./login-page/Dropdown";
import UserLogin from "./login-page/UserLogin";
import AdminLogin from "./login-page/AdminLogin";

function LoginPage() {
    return (
        <div className="first-page">
            <BankLogo/>
            <Dropdown/>
            <UserLogin/>
            <AdminLogin/>
        </div>
    )
}

export default LoginPage;