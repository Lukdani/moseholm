export const prefixZero = (item) => {
  // Jeg wrapper i try/catch, fordi parsing til string måske vil fejle;
  try {
    const parstedString = item.toString();
    if (parstedString && parstedString.length < 2) {
      console.log(parstedString + "test");
      return `0${parstedString}`;
    }
    return parstedString;
  } catch {
    console.debug("Failed parsing to string");
    return item;
  }
};
