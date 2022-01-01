export const removeLineBreaks = (string) => {
  try {
    return string?.replace(/(\\n)/gm, "");
  }
  catch(e) {
    console.log(e);
    return string;
  }
};
