export const normalizeById = (items, idName = 'id') =>
  items.reduce((normalizedItems, item) => {
    normalizedItems[item[idName]] = item;
    return normalizedItems;
  }, {});
