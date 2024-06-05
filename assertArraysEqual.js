// Input two arrays
//Output appropriate message
//checking two arrays are equal
//Using already implemented eqArrays

// Function to evaluate whether two arrays are a perfect match
const eqArrays=require("./eqArrays")
/**
 * 
 * @param {Array} arr1 
 * @param {*Array} arr2 
 */

//Function to return an assert message

function assertArraysEqual(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`🛑🛑🛑Assertion failed:[${arr1}]!==[${arr2}]`);
  }

}

module.exports=assertArraysEqual;