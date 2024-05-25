//assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
//INPUT-two Objects
//OUTPUT-Assertion message-Assertion passed if both objects are equal else Assertion fail.

//EqObjects
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

// FUNCTION IMPLEMENTATION
/**
 * 
 * @param {object} actual 
 * @param {object} expected 
 * @prints Assertion Message
 * Assertion paseed-if equal objects
 * Assertion failed if not
 */
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual,expected)===true) {
    console.log(`✅✅✅Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${actual}]!==[${expected}]`);
  }
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject,anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectsEqual(shirtObject,longSleeveShirtObject);
