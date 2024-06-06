//Flatten a multidimensional array into one -dimensional
//Input:Multidimensional array
//A flat Array
/**
 * 
 * @param {Array} arr 
 * @returns flattened array
 */

function flatten(arr){
  const res=[]
  for (item of arr){
    if(Array.isArray(item))
      {
        for(ele of item){
          res.push(ele)
          
        }

        }
      
    else{
      res.push(item)
    } 
  }
    return (res); 
  }

  module.exports=flatten;