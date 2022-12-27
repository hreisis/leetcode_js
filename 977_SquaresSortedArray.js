/**
 * @param {number[]} nums
 * @return {number[]}
 */

//two pointer
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1;
    const result = new Array(nums.length);
    let p = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[p] = nums[left] * nums[left];
            left++;
        } else {
            result[p] = nums[right] * nums[right];
            right--;
        }
        p--;
    }
    return result;
}



//暴力解法
var sortedSquares = function(nums) {
    return nums.map(i => i * i).sort((a, b) => a - b);
};