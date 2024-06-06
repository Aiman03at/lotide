// Implement a function to remove a subarray from the main array without modifying the main array
//Using asserEqual Arrays to assert the test cases
//Implementing without
//Input source Array @arr and items to remove array @sub 
//Another array @result that has contents of main array without contents of subarray
/**
 * 
 * @param {Array} arr 
 * @param {Array} sub 
 * @returns Array with all the elements from array arr without the elements in subarray sub
 */
function without(arr,sub){
const result=[];
for(item of arr)
  if(!sub.includes(item)){
    
    result.push(item);
  }
  
  return (result);
}
module.exports=without;