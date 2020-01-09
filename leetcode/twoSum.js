const twoSum = (nums, target) => {
    for (let firIdx = 0; firIdx < nums.length; firIdx++) {
        for (let secIdx = 0; secIdx < nums.length; secIdx++) {
            if (firIdx !== secIdx && target === nums[firIdx] + nums[secIdx]) {
                return [firIdx, secIdx];
            }
        }
    }
}



console.log(twoSum([2, 7, 11, 15], 9));