import generateId from "./generateID";

const onMoneyChange = (
  firstMatch,
  secondMatch,
  amountInput,
  accounts,
  updateAccounts,
  type
) => {
  let mainCopy = [...accounts];
  if (type === "transfer") {
    let senderCopy = { ...mainCopy[mainCopy.indexOf(firstMatch)] };
    let recipientCopy = { ...mainCopy[mainCopy.indexOf(secondMatch)] };
    senderCopy.money = parseInt(senderCopy.money) - parseInt(amountInput);
    recipientCopy.money = parseInt(recipientCopy.money) + parseInt(amountInput);
    mainCopy[mainCopy.indexOf(firstMatch)] = {
      ...senderCopy,
      history: [
        ...senderCopy.history,
        { id: generateId(20), type: "Transfer" },
      ],
    };
    mainCopy[mainCopy.indexOf(secondMatch)] = {
      ...recipientCopy,
      history: [
        ...recipientCopy.history,
        { id: generateId(20), type: "Receive" },
      ],
    };
  } else if (type === "withdraw") {
    let firstCopy = { ...mainCopy[mainCopy.indexOf(firstMatch)] };
    firstCopy.money = parseInt(firstCopy.money) - parseInt(amountInput);
    mainCopy[mainCopy.indexOf(firstMatch)] = {
      ...firstCopy,
      history: [...firstCopy.history, { id: generateId(20), type: "Withdraw" }],
    };
  } else if (type === "deposit") {
    let firstCopy = { ...mainCopy[mainCopy.indexOf(firstMatch)] };
    firstCopy.money = parseInt(firstCopy.money) + parseInt(amountInput);
    mainCopy[mainCopy.indexOf(firstMatch)] = {
      ...firstCopy,
      history: [...firstCopy.history, { id: generateId(20), type: "Deposit" }],
    };
  }
  updateAccounts([...mainCopy]);
};

export default onMoneyChange;
