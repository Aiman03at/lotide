const middle=require("../middle");
const assertArraysEqual=require("../assertArraysEqual")

//TEST DATA 
//checking the middle function
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

//TEST DATA
//Asserting the output
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4,5,6]),[3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]),[ 3]);
assertArraysEqual(middle([1, 2, 3, 4,5]),[2, 3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2]),[2, 3]);