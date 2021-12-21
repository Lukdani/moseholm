export const tryJsonStringify = (json) => {
    try {
        return JSON.stringify(json);
    }
    catch(e) {
        console.log(e);
        return `Failed to parse JSON. Error: ${e}`;
    }
}