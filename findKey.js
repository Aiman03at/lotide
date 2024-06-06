//Assert Equal Function//
/**
* 
* @param {string} actual 
* @param {string} expected 
* @returns boolean-true if the strings are same else false
*/


// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

//Implementing function findKey which takes in an object and a callback. 

//INPUT---in an object and a callback
//It should scan the object 
//OUTPUT-----return the first key for which the callback returns a truthy value.
 // If no key is found, then it should return undefined.



const findKey =function(obj,callback){
  for (ob in obj){
    if(callback(obj[ob])){
      return ob;
    }
  }

}
module.exports=findKey;