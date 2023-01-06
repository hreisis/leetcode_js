/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**idea: 快慢指针
快指针找要删除的值之后一个值（新数组需要的值）
use slow to add number to the new array */
 var removeElement = function (nums, val) {
    if (nums.length === 0) return 0;
    let slow = 0,
      fast = 0;
    while (fast < nums.length) {
      if (nums[fast] !== val) {
        nums[slow] = nums[fast];
        slow++;
      }
      fast++;
    }
  
    return slow;
  };

//answer2:
var removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != val){
            nums[k++] = nums[i]
        }
    }
    return k;
};