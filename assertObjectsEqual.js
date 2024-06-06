//assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
//INPUT-two Objects
//OUTPUT-Assertion message-Assertion passed if both objects are equal else Assertion fail.

//EqObjects
const eqObjects=require("./eqObjects")

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

module.exports=assertObjectsEqual;
