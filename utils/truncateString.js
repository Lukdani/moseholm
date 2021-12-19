export const truncateString = (string, maxChar) => {
  if (maxChar && string.length > maxChar) {
    return `${string.substring(0, maxChar)}...`;
  }
  return string;
};
