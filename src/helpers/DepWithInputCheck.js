const depWithInputCheck = (accountMatch, amountInput) => {
  if (!accountMatch) {
    return 7;
  } else if (parseInt(amountInput) <= 0 || amountInput === '') {
    return 8;
  } else if (parseInt(amountInput) > parseInt(accountMatch.money)) {
    return 9;
  } else {
    return null;
  }
};

export default depWithInputCheck;
