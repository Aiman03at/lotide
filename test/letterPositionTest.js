const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");
//TEST DATA
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").o, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]);