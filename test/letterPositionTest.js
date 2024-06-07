const assert = require('chai').assert;

const letterPositions = require("../letterPositions");



describe("#letterPosition", () => {
  it("returns [9,16,22] for(('lighthouse in the house').e)", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9,16,22] );
    });
  it("returns [1] for(('lighthouse in the house').e)", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').l, [0] );
    }); 
  it("returns [3,5,15,18] for(('lighthouse in the house').h)", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3,5,15,18] );
        });
  it("returns[1]) for(('hello').o)", () => {
    assert.deepEqual((letterPositions('hello')).o, [4]); 
          });
  
    
    

});
