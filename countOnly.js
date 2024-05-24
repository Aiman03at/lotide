//function should take in a collection of items and return counts for a specific subset of those items. 
// INPUT
   //Function parameters
   //datatype-String
   //2 inputs-1)array of strings
             // 2)Object of subset
//OUTPUT
    //return {Object} number of subset of items
    //datatype {object}
//PROCESSING
    // check for the items in subset 
    //count the number of times the above item appears in the main array


    //AsserEqual function 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed:[ ${actual}] === [${expected}]`);
  }
  else {
    console.log(`Asserion failed:[${actual}]!==[${expected}]`);
  }
};

/**
 * Count the number of times specific items from subset array are present inmain arrray
 * @param {Array}  allItems: an array of strings that we need to look through
 * @param {Object}  itemsToCount: an object specifying what to count
 * @return {Object} all the strings found in the input array, and their respective counts.
 */

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const countItem={};
  for (const item of allItems) {
    
    if(itemsToCount[item]===true){
        if(!countItem[item]){
        countItem[item]=1;
        }
        else{
          countItem[item]++;
        }
        
      
      }
    }  
  
    
    return (countItem);
};



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
  result1=countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,

  });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);