/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        
        if(stack.length && s[i] === stack[stack.length - 1]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    return stack.join("");
};