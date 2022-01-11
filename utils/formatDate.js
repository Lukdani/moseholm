import { prefixZero } from "./prefixZero.js";

export const formatDate = (passedDateTime, includeTime = false) => {
  let dateString = "";

  // To fix date formatting issue on Safari, "YYYY-MM-DD hh:mm:ss" has to be replaced with "YYYY-MM-DDThh:mm:ss";
  const dateTime = new Date(passedDateTime.replace(/\s/g, "T"));
  console.log(passedDateTime);

  const year = dateTime.getFullYear();

  // Months gets counted from 0, so we have to add 1;
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
