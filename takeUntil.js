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
        
};
        




  
  
 