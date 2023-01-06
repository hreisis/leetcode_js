/**
 * @param {string} s
 * @return {string}
 */
//解法一
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};

//解法二
var replaceSpace = function(s) {
    return s.split(" ").join("%20");
};

/**解法三 双指针 手动实现
 * 将字符串转换为数组，然后统计其中的空格数量。
 * 根据空格数量和原有字符串有效字符长度，计算出刚好存放替换后的字符长度的数组。
 *创建两个指针，一个指数组末尾，一个指字符串有效位的末尾，实现原地修改。 */
var replaceSpace = function(s) {
    let resArr = Array.from(s);
    let count = 0;

    for(let i = 0; i < resArr.length; i++){
        if(resArr[i] === " "){
            count++;
        }
    } 
    let slow = resArr.length - 1, fast = resArr.length + count * 2 - 1;

    while(slow >= 0){
        if(resArr[slow] !== " "){
            resArr[fast--] = resArr[slow--];
        } else {
        resArr[fast] = "0";
        resArr[fast - 1] = "2";
        resArr[fast - 2] = "%";
        fast = fast -3;
        slow--;
        }
    }
    return resArr.join("");
};
/**
 *      resArr[fast--] = "0";
        resArr[fast--] = "2";
        resArr[fast--] = "%";
 */