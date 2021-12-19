export const insertLineBreak = (string) => {
  return string.replace(/(\\n)/gm, "<br>");
};
