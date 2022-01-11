// Takes an array and an item;
// If the list does not contain the item, it adds it - and else it removes it;
export const updateList = (list, item) => {
  return list.includes(item)
    ? [...list].filter((filterItem) => filterItem !== item)
    : [...list, item];
};
