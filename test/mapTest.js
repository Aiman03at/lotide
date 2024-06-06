
const assertArraysEqual=require("../assertArraysEqual");
const map = require("../map");
/////////TESTING USING ASSERTIONS//////////
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const result2=map(words,(word)=>word.length);
console.log(result2);
const result3=map(words,(word)=>word[(word.length)-1]);
console.log(result3);
const result4=map(words,(word)=>word.toUpperCase());
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(result2,[6, 7, 2, 5, 3 ]);
assertArraysEqual(result3,['d','l','o','r','m' ]);
assertArraysEqual(result4,['GROUND','CONTROL','TO','MAJOR','TOM']);