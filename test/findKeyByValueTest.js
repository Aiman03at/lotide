const findKeyByValue = require("../findKeyByValue");
const assertEqual = require("../assertEqual");

//TEST DATA
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);