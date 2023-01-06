/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

/**
 * trim the space and convert string into array
 * reverse the whole array
 * reverse each word
 * join
 */



var reverseWords = function(s) {
    let resArr = Array.from(s);
    deleteSpace(resArr);
    reverse(resArr, 0, resArr.length - 1);

    let start = 0;
    for(let i = 0; i <= resArr.length; i++){
        if(resArr[i] === ' ' || i === resArr.length){
            reverse(resArr, start, i - 1);
            start = i + 1;
        }

    }
    return resArr.join('');
};

var deleteSpace = function(resArr) {
    let slow = 0;
    let fast = 0;
//delete the begining spaces and repetitive spaces
    while( fast < resArr.length){
        if(resArr[fast] === ' ' && (fast === 0 || resArr[fast - 1] === ' ')){
            fast++;
        } else {
            resArr[slow++] = resArr[fast++];
        }
    }
//delete the ending spaces
    resArr.length = resArr[slow - 1] === " " ? slow - 1 : slow;
}

//reverse the array
var reverse = function(resArr, start, end) {
    let left = start;
    let right = end;
    while(left < right){
        [resArr[left], resArr[right]] = [resArr[right], resArr[left]];
        left++;
        right--;
    }
}