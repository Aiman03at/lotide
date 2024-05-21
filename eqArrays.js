//Using AssertEqual to compare two values

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`Asserion failed:[${actual}]!==[${expected}]`);
  }
};
//Input is two arrays
//Output is a bolean value true for matching arrays and false for unmatched arrays
//Details:
// Function to evaluate whether two arrays are a perfect match
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

  
//Test Data 
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3,2,1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));