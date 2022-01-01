export const insertLineBreak = (string) => {
  try {
    return string?.replace(/(\\n)/gm, "<br>");
  }
  catch(e) {
    console.log(e);
    return string;
  }
};
