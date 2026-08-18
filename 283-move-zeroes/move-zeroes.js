/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let first = 0;
    let last = nums.length - 1;

    while( first < last){

        if(nums[first] === 0){
           for (let i = first; i < last; i++) {
                nums[i] = nums[i + 1];
            }

            nums[last] = 0;
            last--;
        }
        else{
            first++
        }
    }
     return nums;
};