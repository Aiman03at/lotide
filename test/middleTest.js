const middle=require("../middle");
const assertArrayequals=require("../assertArraysEqual")

//TEST DATA 
//checking the middle function
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

//TEST DATA
//Asserting the output
assertArrayequals(middle([1, 2, 3, 4]),[2, 3]);
assertArrayequals(middle([1, 2, 3, 4,5,6]),[3, 4]);
assertArrayequals(middle([1, 2, 3, 4]),[ 3]);
assertArrayequals(middle([1, 2, 3, 4,5]),[2, 3]);
assertArrayequals(middle([1]),[]);
assertArrayequals(middle([1, 2]),[]);
assertArrayequals(middle([1, 2]),[2, 3]);