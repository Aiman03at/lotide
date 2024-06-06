const assert = require('chai').assert;
const tail=require("../tail");


describe("#tail", () => {
  it("returns [2,3,4] for [1, 2, 3,4]", () => {
    assert.deepEqual(tail([1, 2, 3,4]), [2,3,4]);
    });
    it("returns [2,3,4,5,6]  for [1,2,3,4,5,6]", () => {
      assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]); 
    });  
    it("returns [2,3] for [1,2,3]", () => {
      assert.deepEqual(tail([1,2,3]), [2,3]); 
    });  
    it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
      assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]); 
    });  
    
    it("returns []  for [1]", () => {
      assert.deepEqual(tail([1]), []); 
    }); 
    it("returns [2]  for [1,2]", () => {
      assert.deepEqual(tail([1,2]), [2]); 
    });  
    it("returns ['Lighthouse','Labs']  for ['hello','Lighthouse','Labs]", () => {
      assert.deepEqual(tail(["hello","Lighthouse","Labs"]), ["Lighthouse","Labs"]); 
    });   
 

});


