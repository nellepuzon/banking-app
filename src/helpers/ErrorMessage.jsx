import React from "react";

const ErrorMessage = (error) => {
    switch (error.errorType) {
        case 1:
            error.onErrorChange("fill out necessary information")
            break
        case 2:
            error.onErrorChange("username already exists")
            break
        case 3:
            error.onErrorChange("full name already exists")
            break
        case 4:
            error.onErrorChange("account already exists")
            break
        case 5:
            error.onErrorChange("invalid username")
            break
        case 6:
            error.onErrorChange("invalid password")
            break
        case 7:
            error.onErrorChange("account not found")
            break
        case 8:
            error.onErrorChange("invalid amount input")
            break
        case 9:
            error.onErrorChange("not enough balance")
            break
        case 10:
            error.onErrorChange("sender account not found")
            break
        case 11:
            error.onErrorChange("recipient account not found")
            break
        case 12:
            error.onErrorChange("cannot transfer money to the same account")
    }
    return (
        <div className="error-message error">{error.errorMessage}</div>
    )
}

export default ErrorMessage;