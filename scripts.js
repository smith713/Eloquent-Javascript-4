//////////////////////// The Sum Of A Range/////////////////////
//
//// Comment out the bottom range function for successful opperation
function range(start, end) {
  var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

////*******************************************************************
function sum(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


////******************************************************************
//// Comment out the top range function for successful opperation
function range(start, end, step) {
    var arr = [];
    if (!step) {
        step = 1;
    } else if (step < 0) {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
    } else {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(range(1,10));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));

///////////////////Reversing An Array ///////////////////////
function reverseArray(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};
console.log(reverseArray(["A", "B", "C"]));

///////////////////Reversing Array In Place ///////////////////////

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var temp = array[i];
            array[i] = array[array.length - 1 - i];
        }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


/////////////////// The List ///////////////////////

function arrayToList(array) {
  var list = null;
  for( var i = array.length-1; i >= 0; i-- ) {
       list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray( list ) {
  var array = [];
    for( var node = list; node; node = node.rest )
    array.push( node.value );

  return array;
}

function prepend( value, rest ) {
  return {value: value, rest: rest};
}

function nth( list, n ) {  
  if( n === 0 )
    return list.value;
  else
    return nth( list.rest, n - 1 );
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20