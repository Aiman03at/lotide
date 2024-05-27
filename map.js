//
//INPUT---function will take in two arguments:An array to map
                                             //A callback function
//OUTPUT----return a new array based on the results of the callback function.

//
const words = ["ground", "control", "to", "major", "tom"];
/**
 * @params {Array} array
 * @params {function} callback
 * @returns {Array} based on the results of the callback function.

 * 
 */
 const map=function(array,callback){
  const results=[];
  for (let item of array) {
    results.push(callback(item))
  }
  
  return results;

};



//TESTING DATA using assertArraysEqual///




/**
 * Equal Arrays
 * @param {Array} arr1 
 * @param {*Array} arr2 
 * @returns boolean returns true if matches else false
 */
function eqArrays(arr1,arr2){
  if (arr1.length==arr2.length){                  //comparing lengths
    for(let i=0;i<arr1.length;i++)
      {
        if(arr1[i]!==arr2[i]){
          return(false);
        }
      }
      return(true);
  }  
  else {
    return(false);
  }
};


/**
 * Assert Arrays Equal
 * @param {Array} arr1 
 * @param {*Array} arr2 
 */

//Function to return an assert message

function assertArrayequals(arr1,arr2){
  if (eqArrays(arr1,arr2)===true) {
    console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
  }
  else {
    console.log(`🛑🛑🛑Asserion failed:[${arr1}]!==[${arr2}]`);
  }

}


//////////TESTING USING ASSERTIONS//////////
//const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const result2=map(words,(word)=>word.length);
console.log(result2);
const result3=map(words,(word)=>word[(word.length)-1]);
console.log(result3);
const result4=map(words,(word)=>word.toUpperCase());
assertArrayequals(results1,['g','c','t','m','t']);
assertArrayequals(result2,[6, 7, 2, 5, 3 ]);
assertArrayequals(result3,['d','l','o','r','m' ]);
assertArrayequals(result4,['GROUND','CONTROL','TO','MAJOR','TOM']);


