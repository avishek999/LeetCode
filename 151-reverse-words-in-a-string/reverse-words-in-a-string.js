/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let reverse = ''

 let arr = s.split(/\s+/);
 
    for(let i = arr.length-1; i>=0 ; i--){
       reverse+=arr[i] + ' ';
    }

 return reverse.trim()

};