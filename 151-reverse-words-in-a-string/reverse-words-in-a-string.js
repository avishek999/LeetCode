/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
const reverse = s.trim().split(/\s+/).reverse().join(' ')

   return reverse;
};