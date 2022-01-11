export const prefixZero = (item) => {
  // Wrapping in try/catch since the parsing of the string might fail;
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
