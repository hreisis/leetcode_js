/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substring(n) + s.substring(0, n)
};

//add the first part to the end and do the slice
var reverseLeftWords = function(s, n) {
    const len = s.length;
    for(let i = 0; i < n; i++){
        s = s + s[i];
    }
    return s.slice(n, s.length + n)
};

//add the second part to the begining, and do the slice
var reverseLeftWords = function(s, n) {
    const len = s.length;
    for(let i = 0; i < len - n; i++){
        s = s[len - 1] + s
    }
    return s.slice(0, len)
};

//slice two parts and concat
var reverseLeftWords = function(s, n) {
    let s1 = s.slice(0,n);
    let s2 = s.slice(n, s.length);
    return s2.concat(s1);
};

//Option: deal with the existing string without taking more space
var reverseLeftWords = function (s, n) {
    /** Utils */
    function reverseWords(strArr, start, end) {
        let temp;
        while (start < end) {
            temp = strArr[start];
            strArr[start] = strArr[end];
            strArr[end] = temp;
            start++;
            end--;
        }
    }
    /** Main code */
    let strArr = s.split('');
    let length = strArr.length;
    reverseWords(strArr, 0, length - 1);
    reverseWords(strArr, 0, length - n - 1);
    reverseWords(strArr, length - n, length - 1);
    return strArr.join('');
};