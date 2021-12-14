export const updateList = (list, item) => {
   return list.includes(item) ? [... list].filter(filterItem => filterItem !== item) : [... list, item];
}