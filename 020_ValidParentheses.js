/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * Create a map contains key & value
 * Loop through the keys, locate the according value in the map, push to stack
 * if != has, s[i]
 */
var isValid = function (s) {
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
