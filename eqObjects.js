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
        (eqArrays(object1[k],object2[k]));
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

//TEST DATA FOR PRIMITIVES AS VALUES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

assertEqual(shirtObject.color,anotherShirtObject.color);
assertEqual(shirtObject.size,anotherShirtObject.size);
assertEqual(longSleeveShirtObject.size,shirtObject.size);
assertEqual(longSleeveShirtObject.sleeveLength,shirtObject.size)


//TEST DATA FOR ARRAYS AS VALUES

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false