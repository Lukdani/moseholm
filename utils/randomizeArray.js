export const randomizeArray = array => {
    try {
        const computedArray = [];

        for (let index = 0; index < array.length; index++) {
            computedArray.push(null);
        }
        array.forEach(arrayItem => {
            tryInsert(arrayItem, computedArray)
        })
        return computedArray;
    }
    catch(e) {
        console.log(e);
        return [];
    }
}

const tryInsert = (arrayItem, array, passedIndex) => {
    if (passedIndex) {
        const regulatedIndex = passedIndex <= 0 ? passedIndex = array.length : passedIndex -1;
        if (array[regulatedIndex] === null) {
            array[regulatedIndex] = arrayItem;
            return;
        }
        else {
            tryInsert(arrayItem, array, regulatedIndex -1)
            return;
        }
    }
    const randomIndex = Math.floor((Math.random(0, array.length) *10));
    if (array[randomIndex] === null) {

        array[randomIndex] = arrayItem;
        return;
    }
    else {
        tryInsert(arrayItem, array, randomIndex)
    }
}