// ==== forEach() ==== //

const arr = [1,2,3,4,5]

function myEach(arr, callback)
{
    for(let i = 0; i < arr.length; i++)
    {
        callback(arr[i]);
    }
}

console.log("myEach: ");
console.log(arr);

// ==== map() ==== //

const arr1 = [1,2,3,4,5,6,7,8,9,10]

function myMap(arr, callback)
{
    const result = [];
    for(let i=0;i<arr.length;i++)
    {
        result.push(callback(arr[i]));
    }
    return result;
};

console.log("myMap: ");
console.log(myMap(arr1, (num)=>{return num ** 2}));

// ==== filter() ==== //

const filternums = [1, 2, 3, 4, 5, 6];

function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("myfilter: ");
console.log(myFilter(filternums, (num) => num % 2 === 0));

// ==== some() ==== //

const somenums = [1, 3, 5, 6, 7];

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log("mySome: ");
console.log(mySome(somenums, (num) => num > 5));

// ==== every() ==== //

const everynums = [3, 6, 9, 12];

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

console.log("myEvery: ");
console.log(myEvery(everynums, (num) => num % 3 === 0));


// == Reduce == //

function myReduce(arr, callback, initialVal) {
  if (arr.length === 0 && initialVal === undefined) {
    throw new Error("Cannot reduce an empty array without an initial value");
  }

  let accumulator = initialVal !== undefined ? initialVal : arr[0];
  let startIndex = initialVal !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

// == myIncludes == //

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// == myIndexOf == //

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// == myPush == //

function myPush(arr, elementToAdd) {
  arr[arr.length] = elementToAdd;
  return arr.length;
}

// == Everything == // 

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false; // If one test fails, stop and return false
    }
  }
  return true; // If all pass, return true
} 

