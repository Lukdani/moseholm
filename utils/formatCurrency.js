export const formatCurrency = (amount, currency) => {
  // Limit decimals to 2 and parse it back to string;
  let stringifiedAmount = (+amount).toFixed(2)?.toString();

  // Change "." to "," to match Danish locale;
  if (stringifiedAmount) {
    stringifiedAmount = stringifiedAmount.replace(/\./g, ",");
  }

  // Split string into array - since arrays are mutable, and strings are not;
  const splitString = stringifiedAmount.split("");

  // Keep tracking of total length of split string;
  // Has to be updated when a "." is inserted;
  let totalLength = splitString.length;

  // Initialize currentIndex to first integer before ",";
  let currentIndex = totalLength - 1 - 3;

  while (currentIndex > 2) {
    if (currentIndex > 2) {
      // There are more than 3 integers before currentindex, so insert a thousand separator;
      splitString.splice(currentIndex - 2, 0, ".");

      // A "." has been inserted, to update totalLength;
      totalLength++;

      // Update currentIndex for next iteration;
      currentIndex = currentIndex - 3;
      continue;

      // The loop should never hit this, but I keep it for safety measures;
    } else if (currentIndex < 3) {
      break;
    }
  }

  // Parse the array back to a string;
  stringifiedAmount = splitString.join("");

  // Add currency label;
  if (currency) {
    stringifiedAmount += ` ${currency}`;
  }

  return stringifiedAmount;
};

// Outcomment for testing;

/*
console.log(formatCurrency(10000000, "DKK"));
console.log(formatCurrency(1000000, "DKK"));
console.log(formatCurrency(100000, "DKK"));
console.log(formatCurrency(10000, "DKK"));
*/
