export const formatCurrency = (amount, currency) => {
  let stringifiedAmount = (+amount).toFixed(2)?.toString();



  if (stringifiedAmount) {
    stringifiedAmount = stringifiedAmount.replace(/\./g, ",");
  }

  if (stringifiedAmount.indexOf(",") > 3 ) {
    const splitString = stringifiedAmount.split("");
    splitString.splice(1, 0, ".");
    stringifiedAmount = splitString.join("");
  }

  if (currency) {
    stringifiedAmount+= ` ${currency}`;
  }

  return stringifiedAmount;
};
