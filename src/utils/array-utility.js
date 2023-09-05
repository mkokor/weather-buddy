export const removeDuplicates = (array) => {
  let result = [];
  array.forEach((item) => {
    if (!result.includes(item)) result.push(item);
  });
  return result;
};
