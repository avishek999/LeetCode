/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

     let vowels="aeiouAEIOU";
     let vowelInS = []
     let result ;
     let vowelIndex = 0;


     for(let i =0 ; i<s.length;i++){

        if (vowels.includes(s[i])){
           vowelInS.push(s[i])
        }
     }

     vowelInS.reverse();

     result = s.split("");

     for(let i = 0 ;i < result.length;i++){
       if(vowels.includes(result[i])){
        result[i] = vowelInS[vowelIndex];
        vowelIndex++
       }
        
     }

     return result.join("");
};