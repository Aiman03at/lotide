
//assert Equal Function
const assertEqual=require("./assertEqual");
//INPUT-Takes an Array as an input
  //function parameter
//OUTPUT-Returns the first element inthe given array


/**
 * 
 * @param {Array} arr 
 * @returns the first element
 */
const head=function(arr){
  if(arr.length===0) {
    return(undefined)
  }
  else {
  return(arr[0]);
  }

}
// TEST CODE
module.exports=head;

