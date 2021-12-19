import { prefixZero } from "./prefixZero.js";

export const formatDate = (passedDateTime, includeTime = false) => {
  let dateString = "";
  const dateTime = new Date(passedDateTime);

  const year = dateTime.getFullYear();
  const month = prefixZero(dateTime.getMonth() + 1);

  const day = prefixZero(dateTime.getDate());
  const hour = prefixZero(dateTime.getHours());
  const minutes = prefixZero(dateTime.getMinutes());

  dateString = `${day}/${month}/${year}`;
  if (includeTime) {
    dateString += ` ${hour}:${minutes}`;
  }
  return dateString;
};
