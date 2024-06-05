//INPUT
 //Two String values
//OUTPUT
 //Statement showing whethrt the assertion is true or false
 
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(8, 1);

module.exports = assertEqual;