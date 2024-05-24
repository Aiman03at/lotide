//Implementing a function called letterPositions.
//INPUT-Sentence-A string whose characters are evaluated.
//OUTPUT-return all the indices (zero-based positions) in the string where each character is found.


//asertArray Equals ---comparing two arrays to see if they are same
function assertArraysEqual(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${arr1}]!==[${arr2}]`);
  }

}
// Checking whether arrays are equal
//eqArrays
function eqArrays(arr1,arr2){
  if (arr1.length==arr2.length){                  //comparing lengths
    for(let i=0;i<arr1.length;i++)
      {
        if(arr1[i]!==arr2[i]){
          return(false);
        }
      }
      return(true);
  }  
  else {
    return(false);
  }
};
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
console.log(letterPositions("lighthouse in the house"));

//TEST DATA
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").o, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]);