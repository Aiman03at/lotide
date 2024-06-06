const assertArraysEqual =require("../assertArraysEqual");
const without =require("../without");

//Test Data for checking without
const r1=without([1, 2, 3], [1]); // => [2, 3]
const r2=without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//Test data to assert 
assertArraysEqual(r1,[2,3]);
assertArraysEqual(r2,["1","2"]);
assertArraysEqual(r2,[2,3]);



//Test case tocheck that original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
