// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion passed:[" + actual +"]===[" +expected + "]");
  }
  else {
    console.log("Asserion failed:[" + actual + "]!==["+expected + "]");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(8, 1);