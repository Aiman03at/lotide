//Using AssertEqual to compare two values
//Input is two arrays
//Output is a bolean value true for matching arrays and false for unmatched arrays
//Details:
// Function to evaluate whether two arrays are a perfect match
const assertEqual=require("./assertEqual");
/**
 * 
 * @param {Array} arr1 
 * @param {*Array} arr2 
 * @returns boolean returns true if matches else false
 */

function eqArrays(arr1,arr2) {
  
  if (arr1.length==arr2.length) {                  //comparing lengths
    
    for(let i=0;i<arr1.length;i++)
      {
        if(arr1[i]!==arr2[i]){
          return(false);
        }
      }
      return(true);
  }  else {
    return(false);
  }
};

  



module.exports=eqArrays;  