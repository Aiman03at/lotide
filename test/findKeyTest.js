const assert = require('chai').assert;
const findKey = require("../findKey")

const obj1={
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }
  
 const obj2= {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    }
    



 const obj3= {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }
  

  

describe("#findKey", () => {
  it("returns noma for(obj1,(x) => x.stars === 2)", () => {
    assert.strictEqual(findKey(obj1,(x) => x.stars === 2),"noma");
    });
  it("returns Akaleri for(obj2,(x) => x.stars === 3)", () => {
    assert.strictEqual(findKey(obj2,(x) => x.stars === 3),"Akaleri");
    });
  it("returns undefined for (obj3,(x) => x.stars===8)", () => {
    assert.strictEqual(findKey(obj3,(x) => x.stars===8),undefined);
    });
  

});
/**describe("#findKey", () => {
  it("returns for(", () => {
    assert.deepEqual(findKey();
    });
  

}); */