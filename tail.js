const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`Asserion failed:[${actual}]!==[${expected}]`);
  }
};
const tail=function(arr){
  let temp=[];
  if(arr.length===0 && arr.length===1) {
    
    return(temp);

  }
  else {

  for(let i=1;i<arr.length;i++)  {
    console.log(arr[i]);
    temp.push(arr[i]);
   }
   
   return(temp);
  }
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
const res=tail([]);
assertEqual(res.length,0);