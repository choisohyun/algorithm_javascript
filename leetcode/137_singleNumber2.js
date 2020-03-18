const singleNumber = nums => {
  const countNums = new Map();

  nums.forEach(element => {
    if (!countNums.get(element)) {
      countNums.set(element, 1);
    } else {
      countNums.set(element, countNums.get(element) + 1);
    }

    if (countNums.get(element) === 3) countNums.delete(element);
  });

  return [...countNums.keys()][0];
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
