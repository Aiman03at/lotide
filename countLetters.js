//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//INPUT
    // Sentence String
//OUTPUT
    //object with count of each letter
//PROCESSING
    //loopover the sentence and calculate the occurance of each letter
    
 //Assert Equal   
    const assertEqual = function(actual, expected) {
      if (actual === expected) {
        console.log(`Assertion passed:[ ${actual}] === [${expected}]`);
      }
      else {
        console.log(`Asserion failed:[${actual}]!==[${expected}]`);
      }
    };    

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
    result1=countLetters("lighthouse labs");
    
    assertEqual(result1["l"],2);
    assertEqual(result1[" "],undefined);
    assertEqual(result1["y"],2);
    assertEqual(result1["a"],1);