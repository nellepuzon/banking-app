const loginCheckInput = (user, passInput) => {
  if (user) {
    if (user.password !== passInput) {
      return 6;
    } else {
      return null;
    }
  } else {
    return 5;
  }
};

export default loginCheckInput;
