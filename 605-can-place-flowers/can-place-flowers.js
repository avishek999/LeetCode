/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let leftEmptyPlot = false
    let rightEmptyPlot = false
    let counter = false
    
    for(let i = 0 ;i < flowerbed.length ; i++ ){
        if(flowerbed[i] === 0  ){
            rightEmptyPlot = i === 0 ||(flowerbed[i-1] === 0);
            leftEmptyPlot = i === flowerbed.length -1 ||(flowerbed[i+1] ===0 );
        }
        if(rightEmptyPlot &&leftEmptyPlot  ){
         flowerbed[i] = 1;
         counter++
         if(counter >= n){
            return true
         }
        }
    }

      return counter >= n;
};