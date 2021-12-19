export const truncateString = (string, maxChar) => {
  if (maxChar) {
    return `${string.substring(0, maxChar)}...`;
  }
  return string;
};
