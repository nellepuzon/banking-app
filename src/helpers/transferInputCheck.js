const transferInputCheck = (senderMatch, recipientMatch, amountInput) => {
  if (!senderMatch || !recipientMatch || amountInput === '') {
    return 1;
  } else if (!senderMatch && recipientMatch && amountInput !== '') {
    return 10;
  } else if (!recipientMatch && senderMatch && amountInput !== '') {
    return 11;
  } else if (parseInt(amountInput) <= 0) {
    return 8;
  } else if (
    parseInt(senderMatch.money) < parseInt(amountInput) &&
    recipientMatch
  ) {
    return 9;
  } else if (senderMatch === recipientMatch) {
    return 12;
  } else {
    return null;
  }
};

export default transferInputCheck;
