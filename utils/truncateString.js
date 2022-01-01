export const truncateString = (string, maxChar) => {
  try {
    if (maxChar && string?.length > maxChar) {
      return `${string.substring(0, maxChar)}...`;
    }
    return string;
  }
  catch(e) {
    console.log(e);
    return string;
  }
};
