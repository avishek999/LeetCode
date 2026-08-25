/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {

    let multiple = k;

     while(true){

    if(!nums.includes(multiple)){
        return multiple;
    }

    multiple+=k
}
    
};