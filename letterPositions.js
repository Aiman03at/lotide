//Implementing a function called letterPositions.
//INPUT-Sentence-A string whose characters are evaluated.
//OUTPUT-return all the indices (zero-based positions) in the string where each character is found.


//asertArray Equals ---comparing two arrays to see if they are same
const assertArraysEqual = require("./assertArraysEqual");
// Checking whether arrays are equal
//eqArrays
const eqArrays = require("./eqArrays");
/**
 * 
 * @param {String} sentence 
 * @returns Object -having each letter as key and thier value is 
 * an array of thier position for each occurances int string 
 */
const letterPositions = function (sentence) {
  const results = {};
  for (i=0;i<sentence.length;i++){
    if(sentence[i]!==" "){
      if(!results[sentence[i]]){
        const temp=[];
        temp.push(i);
        results[sentence[i]]=temp;
      }  
      else{
        results[sentence[i]].push(i);
      }  
        
      }
  }
  
  return results;
};


module.exports=letterPositions;