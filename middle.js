//Implementing a function to return the middle element from an array
//Input is an array @arr
//Output is an element that is in middle of the array
//If the length of array is negative one element is returned.
//If the length of array is positive returns two mid elements
//For arrays with one or two elements, there is no middle. Return an empty array.


/**
 * 
 * @param {Array} arr 
 * @returns Array containing middle element if the size of array is odd
 *           two mid elements if the size of Array is even
 */
// ACTUAL FUNCTION
const middle = function(arr) {
  const res=[];
  let l=arr.length;
 
  if (l<=2){
    return(res);
  }
  if (l%2===0){
    res.push(arr[l/2-1]);
    res.push(arr[l/2]);
  }
  if(l%2!==0){
    let len=Math.floor(l/2);
   
    res.push(arr[len]);
  }
console.log(res);
return(res);
}


module.exports=middle;