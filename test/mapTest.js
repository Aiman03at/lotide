const assert = require('chai').assert;

const map = require("../map");
/////////TESTING USING ASSERTIONS//////////
const words = ["ground", "control", "to", "major", "tom"];


describe("#map", () => {
  it("returns ['g','c','t','m','t'] for(words,(word)=> word[0])", () => {
    assert.deepEqual(map(words,(word) => word[0] ),['g','c','t','m','t'] );
  });
  it("returns [6, 7, 2, 5, 3 ]  for(words,(word)=>word.length)", () => {
      assert.deepEqual(map(words,(word)=>word.length),[6, 7, 2, 5, 3 ]  );
  });
  it("returns ['d','l','o','r','m' ] for(words,(word)=>word[(word.length)-1])", () => {
    assert.deepEqual(map(words,(word)=>word[(word.length)-1]),['d','l','o','r','m' ] );
    });  
    it("returns ['GROUND','CONTROL','TO','MAJOR','TOM'] for(words,(word)=>word.toUpperCase())", () => {
      assert.deepEqual(map(words,(word)=>word.toUpperCase()),['GROUND','CONTROL','TO','MAJOR','TOM'] );
      });    
    

});
