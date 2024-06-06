# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @aiman03at/lotide`

**Require it:**

`const _ = require('@aiman03at/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element in an Array.

  `tail(array)`: Returns an array containing all the elements from main array except the first element.

  `middle(arr)`: Returns 1 middle element from array arr if length of array is negative else 2 middle elements if the length is positive.

  `assertAraysEqual(array1,array2)` : Checking two arrays are equal and consoles if assertion is passed or failed.

  `assertEqual(actual,expected)` : Console logs passed if two values are same else Failed if actual is not equal to expected.

  `assertObjectsEqual(object1, object2)` :Assertion message-Assertion passed if both objects are equal else Assertion fail.

  `countLetters(sentence)` : Take in a sentence (as a string) and then returns the count of each of the letters in that sentence.

  `countOnly(array, object)` : Take in an array of strings that we need to look through and an object specifying what to count and   returns counts for a specific subset of those items.

  `eqArrays(array1, array2)` : Evaluates if the two arrays are a perfect match. Returns true for matching arrays and false for unmatched arrays.

  `eqObjects(object1, object2)` : Evaluates if the two objects are a perfect match. Returns true for matching objects and false for unmatched objects.

  `findKey(object, callback)` : Return the first key for which the callback returns a truthy value.

  `findKeyByValue(object, value)` : Search through the Object to check the corresponding key for the given val and returns the key.

  `flatten(array)` : Flatten a multidimensional array into one -dimensional array and returns it.

  `letterPositions(sentence)` : Takes in an sentence as input and returns all the indices (zero-based positions) in the string where each character is found.

  `map(array,callback)` : Evaluates the input array for the callback and returns a new array based on the results of the callback function.

  `takeUntil(array, callback)` : Return a new array based on the results of the callback function.

  `without(array1, array2)` : Array with all the elements from array1 arr without the elements in subarray array2. 

