const removeDuplicates = (nums) => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) nums.splice(i, 1);
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates([0, 1, 1]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
