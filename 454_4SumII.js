/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let group = new Map();
    let count = 0;
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            const sum = n1 + n2;        
            group.set(sum, (group.get(sum) || 0) + 1) //出现的次数
        }

    }
    // 找到如果 0-(c+d) 在map中出现
    for(const n3 of nums3) {
        for(const n4 of nums4) {
            let sum = n3 + n4;
            count += group.get(0-sum) || 0;
        }
    }

    return count;
};