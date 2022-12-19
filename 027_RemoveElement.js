/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**idea: 快慢指针
跳过对目标 val 的处理，这样就相当于删除了 val
对于不等于 val 的数据，做指针的偏移处理 */
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