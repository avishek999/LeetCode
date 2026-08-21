/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    let arr = [];

    for(let i =0 ;i <nums.length;i++){

        if(nums[i] === val){
          arr.push(i);
        }
    }

 for (let i = arr.length - 1; i >= 0; i--) {
    nums.splice(arr[i], 1);
}

    
};