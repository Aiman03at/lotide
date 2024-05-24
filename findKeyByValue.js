//search for a key on an object where its value matches a given value.
//INPUT-An Object and a value as the function parameter
//OUTPUT-Key for the value --returns this.
//Search through the Object to check the corresponding key for the given value

//Assert Equal Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${actual}]!==[${expected}]`);
  }
};

/**
 * @param obj--{Object}
 * @param val--{String}
 * @returns key value corresponding to the above value val
 * Using Object.keys()-returns an array of keys in an object
 */
const findKeyByValue=function(obj,val){

  for (const key of Object.keys(obj)){
    
    if(obj[key]===val){
      return(key);
    }
  }
};


//TEST DATA
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);