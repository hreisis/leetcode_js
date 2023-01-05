/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Hashmap store the location and number
 * another hashmap store the opposite
 * find if set.has the opposite
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      } else {
        map.set(nums[i], i);
      }
    }
    return [];
  };