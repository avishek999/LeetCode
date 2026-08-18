/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

   let sPointer = 0;

    for (let i = 0; i < t.length; i++) {
        if (sPointer < s.length && s[sPointer] === t[i]) {
            sPointer++;
        }
    }

    return sPointer === s.length;
};