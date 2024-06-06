//function eqObjects which will take in two objects and returns true or false, based on a perfect match.
/// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


/**
  * 
  * @param {string} actual 
  * @param {string} expected 
  * @returns boolean-true if the strings are same else false
  */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${actual}]!==[${expected}]`);
  }
};


//eqArrays function is called if the key value is an array
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
 * @param {Object} object1 
 * @param {Object} object2 
 * @returns  boolean -true if both objects have identical keys with identical values.
 * Objects are equal if They have the same number of keys
   The value for each key in one object is the same as the value for that same key in the other object
 * 
 */


const eqObjects = function (object1, object2) {
  const k1=Object.keys(object1);
  const k2=Object.keys(object2);
  
  if(k1.length===k2.length){
    
    for(const k of k1){
      
      if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
        if(!(eqArrays(object1[k],object2[k]))){
          return(false)
        }
      }
      else{
        if(object1[k]!==object2[k]){
          console.log(object1[k]);
          console.log(object2[k]);
        
          return(false);
        }  
      }
    }
      return(true);

  }
  else{
    return(false);
  }

};

module.exports=eqObjects;

