// Input two arrays
//Output appropriate message
//checking two arrays are equal
//Using already implemented eqArrays

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
/**
 * 
 * @param {Array} arr1 
 * @param {*Array} arr2 
 */

//Function to return an assert message

function assertArrayequals(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${arr1}]!==[${arr2}]`);
  }

}

assertArrayequals([1, 2, 3], [1, 2, 3]);
assertArrayequals([1, 2, 3], [3, 2, 1]);
assertArrayequals(["1", "2", "3"], ["1", "2", "3"]);
assertArrayequals(["1", "2", "3"], ["1", "2", 3]);