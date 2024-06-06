const eqObjects=require("../eqObjects");
const assertEqual=require("../assertEqual")

//TEST DATA FOR PRIMITIVES AS VALUES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

assertEqual(shirtObject.color,anotherShirtObject.color);
assertEqual(shirtObject.size,anotherShirtObject.size);
assertEqual(longSleeveShirtObject.size,shirtObject.size);
assertEqual(longSleeveShirtObject.sleeveLength,shirtObject.size)

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false