//Assert Equal Function//
/**
* 
* @param {string} actual 
* @param {string} expected 
* @returns boolean-true if the strings are same else false
*/


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`✅✅✅Assertion passed:[ ${actual}] === [${expected}]`);
}
else {
  console.log(`🛑🛑🛑Asserion failed:[${actual}]!==[${expected}]`);
}
};

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
const result1=findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2); // => "noma"  
 assertEqual(result1,"noma") ;

  const result2=findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3);

assertEqual(result2,"Akaleri") ;     

const result3=findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars===8);

  console.log(result3);
assertEqual(result3,undefined);