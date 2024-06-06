//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//INPUT
    // Sentence String
//OUTPUT
    //object with count of each letter
//PROCESSING
    //loopover the sentence and calculate the occurance of each letter
    
 //Assert Equal   
 const assertEqual = require("./assertEqual");


    /**
     * @param Sentence 
     * @return Oject of count
     */

    const countLetters=function(Sentence){
      const result={};
      for (let letter of Sentence){
        if(letter!==" "){
          if(!result[letter]){
            result[letter]=1;
          }  
          else
          {
           result[letter]++;
          }  
          }

        }
       return(result);
      }
    

    module.exports=countLetters;