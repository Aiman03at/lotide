
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
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);

