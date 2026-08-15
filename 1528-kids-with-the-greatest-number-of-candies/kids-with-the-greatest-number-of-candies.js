/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let  gretestCandy = Math.max(...candies);
    
    let possibleLargest = []

    for(let i= 0; i<candies.length;i++ ){
       if(candies[i]+ extraCandies >= gretestCandy){
          possibleLargest.push(true)
       }
       else{
        possibleLargest.push(false);
       }

    }
    return possibleLargest
    
};