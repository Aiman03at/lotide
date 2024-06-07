const assert =require('chai').assert;

const countOnly=require("../countOnly");

//TEST DATA

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
  const obj1 = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,

  };


describe("#countOnly",()=>{
  it ("returns 1 for countOnly().[jason]" ,() => {
    assert.strictEqual(countOnly(firstNames,obj1).Jason,1);
    });
    it ("returns undefined for countOnly().[Karima]" ,() => {
      assert.strictEqual(countOnly(firstNames,obj1).Karima,undefined);
      });
      it ("returns undefined for countOnly().[Agouhanna]" ,() => {
        assert.strictEqual(countOnly(firstNames,obj1).Agouhanna,undefined);
        });
        it ("returns 2 for countOnly().[Fang]" ,() => {
          assert.strictEqual(countOnly(firstNames,obj1).Fang,2);
          });
})