export const formatCurrency = (amount, currency) => {
  let stringifiedAmount = (+amount).toFixed(2)?.toString();

  if (stringifiedAmount) {
    stringifiedAmount = stringifiedAmount.replace(/\./g, ",");
  }
  if (currency) {
    stringifiedAmount+= ` ${currency}`;
  }

  return stringifiedAmount;
};
