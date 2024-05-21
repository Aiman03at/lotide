// Implement a function to remove a subarray from the main array without modifying the main array
//Using asserEqual Arrays to assert the test cases
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

//Function to return an assert message

function assertArraysEqual(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`Asserion failed:[${arr1}]!==[${arr2}]`);
  }

}

//Implementing without
//Input source Array @arr and items to remove array @sub 
//Another array @result that has contents of main array without contents of subarray

function without(arr,sub){
const result=[];
for(item of arr)
  if(!sub.includes(item)){
    console.log(item);
    result.push(item);
  }
  console.log(result)
  return (result);
}
//Test Data for checking without
const r1=without([1, 2, 3], [1]); // => [2, 3]
const r2=without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//Test data to assert 
assertArraysEqual(r1,[2,3]);
assertArraysEqual(r2,["1","2"]);
assertArraysEqual(r2,[2,3]);



//Test case tocheck that original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
