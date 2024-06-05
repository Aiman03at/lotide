//Finding the last element in an array 
//INPUT-Aray of elements
//OUTPUT-array containing all the elements from main array except the first

const assertEqual=require("./assertEqual");

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


//exporting the module
module.exports=tail;