// The code below takes an array and mixes the items in the array around on other indexes;

export const randomizeArray = (array) => {
  try {
    // Initialize an array that should contain a null-value for each item in the passed array;
    const computedArray = [];

    for (let index = 0; index < array.length; index++) {
      computedArray.push(null);
    }

    //  For each item in the passed array, try to push it into the computedArray initialized above;
    array.forEach((arrayItem) => {
      tryInsert(arrayItem, computedArray);
    });
    return computedArray;
  } catch (e) {
    console.log(e);
    return [];
  }
};

// The code below is recursive and calls itself untill it is possible to insert an item into an empty spot in the array;
const tryInsert = (arrayItem, array, passedIndex) => {
  // If the method is called with a passedIndex, use that index rather than a random index;
  if (passedIndex) {
    const regulatedIndex =
      passedIndex <= 0 ? (passedIndex = array.length) : passedIndex - 1;
    if (array[regulatedIndex] === null) {
      array[regulatedIndex] = arrayItem;
      return;
    } else {
      // If the index already contains an item, try again with a lower index;
      tryInsert(arrayItem, array, regulatedIndex - 1);
      return;
    }
  }

  // If no index was passed, generate a random number matching an index in the array;
  const randomIndex = Math.floor(Math.random(0, array.length) * 10);

  // If the index is not taken by another item, insert the passed arrayItem;
  if (array[randomIndex] === null) {
    array[randomIndex] = arrayItem;
    return;
  }
  // If the spot is taken, call tryInsert again, this time with an index to start at;
  else {
    tryInsert(arrayItem, array, randomIndex);
  }
};
