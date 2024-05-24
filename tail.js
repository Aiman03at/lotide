//Finding the last element in an array 
//INPUT-Aray of elements
//OUTPUT-array containing all the elements from main array except the first

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${actual}]!==[${expected}]`);
  }
};

/**
 * 
 * @param {Array} arr 
 * @returns {Array} All elements except the first
 */
const tail=function(arr){
  let temp=[];
  if(arr.length===0 || arr.length===1) {
    
    return(temp);

  }
  else {

  for(let i=1;i<arr.length;i++)  {
    
    temp.push(arr[i]);
   }
   
   return(temp);
  }
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
const res=tail([]);
assertEqual(res.length,0);