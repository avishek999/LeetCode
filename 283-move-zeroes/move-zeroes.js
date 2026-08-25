/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     if(!nums.includes(0)){
        return
    }

    let j = 0;

    for(let i = 0 ; i<nums.length;i++){
      if(nums[i] !== 0){
      [nums[i], nums[j]] =[nums[j], nums[i]];
       j++;
      }
    }
    return nums
    
};