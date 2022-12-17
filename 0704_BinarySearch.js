/*
- find the middle num
- compare if mid equals target, then return, if not: 
            if less, find the average of mid and greatest
            if more, find the average of mid and smallest
- if there is no mid number, then return -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while ( left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        if (nums[mid] === target) {
            return mid;
        } else if ( nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid -1
        }
    }
    return -1;
};
