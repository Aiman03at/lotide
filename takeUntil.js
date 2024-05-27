//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

//INPUT---It will take in two parameters as well:
        //The array to work with
       //The callback (which Lodash calls "predicate")
//OUTPUT---return a "slice of the array with elements taken from the beginning.

/**
 * 
 * @param {*} array 
 * @param {*} callback 
 */
const takeUntil = function(array, callback) {
        const results=[];
        for (let item of array) {
          if(!callback(item)){
            results.push(item)
          }
          else{
                return(results)
          }
        }
        
}
        

///TEST DATA///
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TO TEST THE DATA USING ASSER ARRAY EQUAL //

//ASSERT ARRAYEQUAL USES EQUAL ARRAYS//

//EQ Array//
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


  //ASSERT ARRAY EQUAL //
  function assertArrayequals(arr1,arr2){
        if (eqArrays(arr1,arr2)===true) {
          console.log(`✅✅✅Assertion passed:[ ${arr1}] === [${arr2}]`);
        }
        else {
          console.log(`🛑🛑🛑Asserion failed:[${arr1}]!==[${arr2}]`);
        }
      
      }   

 //TESTING USING ASSERTIONS///
 
 assertArrayequals(results1,[1,2,5,7,2]);
 assertArrayequals(results2,["I've", 'been', 'to', 'Hollywood']);