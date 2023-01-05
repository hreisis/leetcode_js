/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    nums.sort((a, b) => a - b)
    const result = [];
    

    for(let k = 0; k < len - 3; k++){
        if(k > 0 && nums[k] === nums[k - 1]) continue;
        //一次去重
        for(let i = k + 1; i < len - 2; i++){
            if(i > k + 1 && nums[i] === nums[i - 1]) continue;
            //二次去重
            let slow = i + 1;
            let fast = len - 1;

            while(slow < fast){
                const sum = nums[k] + nums[i] + nums[slow] + nums[fast];
                if(sum < target) { slow++; continue}
                if(sum > target) { fast--; continue}
                    result.push([nums[k], nums[i], nums[slow], nums[fast]]);
                    slow++;
                    fast--;
                    while(slow < fast && nums[slow] === nums[slow - 1] ){
                        slow++;
                    }
                    while(slow < fast && nums[fast] === nums[fast + 1]){
                        fast--;
                    }
            }
        }
    }
    return result;
};