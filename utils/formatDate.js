export const formatDate = (passedDateTime, includeTime = false) => {
  let dateString = "";
  const dateTime = new Date(passedDateTime);

  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  const hour = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  dateString = `${day}/${month}/${year}`;
  if (includeTime) {
    dateString += ` ${hour}:${minutes}`;
  }
  return dateString;
};
