const assert = require('chai').assert;
const eqObjects=require("../eqObjects");


//TEST DATA FOR PRIMITIVES AS VALUES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
describe("#eqObjects", () => {
  it("returns true for(shirtObject, anotherShirtObject)", () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
    });
    it("returns false for(shirtObject, longSleeveShirtObject)", () => {
      assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
      });
          
      it("returns true for(multiColorShirtObject, anotherMultiColorShirtObject)", () => {
        assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
        });
        it("returns false for(shirtObject, longSleeveShirtObject)", () => {
          assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
          });      

});