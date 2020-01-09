const twoSum = (nums, target) => {
    for (let firIdx = 0; firIdx < nums.length; firIdx++) {
        for (let secIdx = 0; secIdx < nums.length; secIdx++) {
            if (firIdx !== secIdx && target === nums[firIdx] + nums[secIdx]) {
                return [firIdx, secIdx];
            }
        }
    }
}

const hashTwoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        // if compliment exists, return compliment index and i
        if (hash.hasOwnProperty(nums[i])) return [hash[nums[i]], i];

        // else, save the compliment
        const compliment = target - nums[i];
        hash[compliment] = i;
        console.log(hash);
    }
}
