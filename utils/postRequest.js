export const postRequest = async (url = "", data = {}) => {
  if (url) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // This response is a promise and must be awaited;
    // Consider to just await the result before returning;
    return response.json();
  }
};
