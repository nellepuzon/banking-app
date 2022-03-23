const adminInputCheck = (
  userNameMatch,
  fullNameMatch,
  fullName,
  userName,
  password,
  balance
) => {
  if (fullName === "" || balance === "" || userName === "" || password === "") {
    return 1;
  } else if (
    userNameMatch &&
    !fullNameMatch &&
    fullName !== "" &&
    userName !== "" &&
    password !== "" &&
    balance !== ""
  ) {
    return 2;
  } else if (
    fullNameMatch &&
    !userNameMatch &&
    fullName !== "" &&
    userName !== "" &&
    password !== "" &&
    balance !== ""
  ) {
    return 3;
  } else if (
    userNameMatch &&
    fullNameMatch &&
    fullName !== "" &&
    userName !== "" &&
    password !== "" &&
    balance !== ""
  ) {
    return 4;
  } else {
    return 20;
  }
};

export default adminInputCheck;
