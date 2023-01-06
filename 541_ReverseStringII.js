/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length;
  let resArray = s.split("");

  for (let i = 0; i < len; i += 2 * k) {
    let left = i,
      right = i + k - 1;

    while (left < right) {
      if (resArray[right] === undefined) {
        right--;
        continue;
      }

      [resArray[left], resArray[right]] = [resArray[right], resArray[left]];
      left++;
      right--;
    }
  }
  return resArray.join("");
};

//第二种写法
var reverseStr = function(s, k) {
    const len = s.length;
    let resArr = s.split(""); 
    for(let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i - 1, r = (i + k) > len ? len : (i + k);
        while(++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join("");
};
