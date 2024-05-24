//Implementing a function to return the middle element from an array
//Input is an array @arr
//Output is an element that is in middle of the array
//If the length of array is negative one element is returned.
//If the length of array is positive returns two mid elements
//For arrays with one or two elements, there is no middle. Return an empty array.

//// TEST/ASSERTION FUNCTIONS
//const eqArrays = function(...) 
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
//const assertArraysEqual = function(actual, expected) 
  


//Function to return an assert message

function assertArrayequals(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${arr1}]!==[${arr2}]`);
  }

};
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


//TEST DATA 
//checking the middle function
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]


//TEST DATA
//Asserting the output
assertArrayequals(middle([1, 2, 3, 4]),[2, 3]);
assertArrayequals(middle([1, 2, 3, 4,5,6]),[3, 4]);
assertArrayequals(middle([1, 2, 3, 4]),[ 3]);
assertArrayequals(middle([1, 2, 3, 4,5]),[2, 3]);
assertArrayequals(middle([1]),[]);
assertArrayequals(middle([1, 2]),[]);
assertArrayequals(middle([1, 2]),[2, 3]);