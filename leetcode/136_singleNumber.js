const singleNumber = nums => {
  //   nums.sort();
  //   console.log(nums);
  //   for (let i = nums.length - 2; i >= 0; i--) {
  //     if (nums[i] === nums[i + 1]) {
  //       nums.splice(i + 1, 1);
  //       nums.splice(i, 1);
  //     }
  //   }
  //   console.log(nums);

  //   return nums[0];
  return nums.reduce((sum, current) => (sum ^= current));
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
