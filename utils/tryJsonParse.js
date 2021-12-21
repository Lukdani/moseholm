export const tryJsonParse = (string) => {
    try {
        return JSON.parse(string);
    }
    catch(e) {
        return `Failed to parse string to JSON. Error: ${e}`;
    }
}