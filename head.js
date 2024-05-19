const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion passed");
  }
  else {
    console.log("Asserion failed");
  }
};

const head=function(arr){
  if(arr.length===0) {
    return(undefined)
  }
  else {
  return(arr[0]);
  }

}
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);