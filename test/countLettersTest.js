const assert =require('chai').assert;

const countLetters = require("../countLetters")
const assertEqual = require("../assertEqual");


describe("#countLetters",()=>{
  it ("returns 2 for countLetters().['l']" ,() => {
    assert.strictEqual(countLetters('lighthouse labs').l,2);
    });
    it ("returns undefined for countLetters('lighthouse labs').['']" ,() => {
      assert.strictEqual(countLetters('lighthouse labs').p,undefined);
      });
      it ("returns 2 for countLetters('lighthouse labs').['h']" ,() => {
        assert.strictEqual(countLetters('lighthouse labs').h,2);
        });
        it ("returns 1 for countLetters('lighthouse labs').['a']" ,() => {
          assert.strictEqual(countLetters('lighthouse labs').a ,1);
          });      
        
})

    