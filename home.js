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

console.log("\nmyMap: ");
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

console.log("\nmyfilter: ");
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

console.log("\nmySome: ");
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

console.log("\nmyEvery: ");
console.log(myEvery(everynums, (num) => num % 3 === 0));


// ==== reduce() ==== //

const reducenums = [1, 2, 3, 4, 5];

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

console.log("\nmyReduce: ");
console.log(myReduce(reducenums, (acc, val) => acc * val)); 



// ==== includes() ==== //

const fruits = ['apple', 'banana', 'orange'];

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log("\nmyIncludes: ")
console.log(myIncludes(fruits, 'banana'));


// ==== indexOf() ==== //

const colors = ['red', 'green', 'blue', 'green'];

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("\nmyIndexOf: ")
console.log(myIndexOf(colors, 'blue'));


// ==== myPush ==== //

const hamsters = ['hamtaro', 'bijou', 'oxnard', 'sandy'];

function myPush(arr, elementToAdd) {
  arr[arr.length] = elementToAdd;
  return arr.length;
}

console.log("\nmyPush: ")
console.log(myPush(hamsters, 'boss'));
console.log(hamsters); 

// ==== lastIndexOf() ==== //

const felidae = ['lion', 'tiger', 'panther', 'jaguar', 'leopard'];

function myLastIndexOf(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log("\nmyLastIndexOf: ")
console.log(myLastIndexOf(felidae, 'tiger'));
console.log(myLastIndexOf(felidae, 'wolf'));


// ==== Objects.keys() ==== //

const student = {
  name: 'Deborah',
  age: 22,
  major: 'Computer Science'
};

function myObjectKeys(obj) {
  const keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key); 
    }
  }

  return keys;
}

console.log("\nmyObjectKeys: ");
console.log(myObjectKeys(student));


// ==== Object.values() ==== //

const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2005
};

function myObjectValues(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

console.log("\nmyObjectValues: ");
console.log(myObjectValues(car));


// ==== Sum of A Range ==== //


function range(start, end, step = 1) {
  const result = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

function sum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("\nSum of a Range: ")
console.log("\nrange between 2 and 8: " + range(2, 8));
console.log("\nnumbers between 7 and 4: " + range(7, 4, -1));
console.log("\nsum of range between 1 and 10: " +sum(range(1, 10)));


