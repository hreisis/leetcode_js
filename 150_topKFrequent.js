var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

var topKFrequent = function(nums, k) {
    const map = new Map();
    for(let i = 0; i <nums.length; i++){
        map.set(nums[i], map.get(nums[i]) || 0 + 1);}
    let resArr = [...map.keys()].sort((a,b) => map.get(a) - map.get(b)).slice(0,k);
    return resArr;
};

var topKFrequent = function(nums, k) {
    // Create a map, set the elements to be the keys and the freq to be the values
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    // iterate the entries map, get all the keys sorted by the highest to lowest of the values 
    let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
    
    return sortArr;
};
