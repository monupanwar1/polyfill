// syntax

// Array.map(useCallback,thisArg)

// function callbackFn(element,index,array){}

// sample data
const sample1 = [1, 2, 3, 4];
const sample2 = new Array(10);
const sample3 = [1, , , , 2, , , , 3, , , , 4];
const sample4 = {
  length: 2,
  0: 10,
  1: 20,
  3: 30,
};

// 01---->simple a function return squre of each number

// calling
// const result = myMap(sample1, transoformArray);
// console.log(result);

// transform fnc
// function transoformArray(elem, index, Array) {
//   return elem * elem;
// }

// initlization
// function myMap(dataArray, callbackFn) {
//   let finalArray = [];
//   for (let i = 0; i < dataArray.length; i++) {
//     const value = dataArray[i];
//     const newValue = callbackFn(value, i, dataArray);
//     finalArray.push(newValue);
//   }
//   return finalArray;
// }

// adding to prototype
// const arr = [1, 2, 3, 4];

// initlization
// Array.prototype.myMap = function (callbackFn) {
//   if (typeof callbackFn != 'function') {
//     throw new TypeError('callbackFn is not a function');
//   }
//   const result = new Array(this.length);

//   let flag = 0;

//   while (flag < this.length) {
//     if (this.hasOwnProperty(flag)) {
//       const value = this[flag];
//       const newValue = callbackFn(value, flag, this);
//       result[flag] = newValue;
//       flag++;
//     }
//   }

//   // for (let i = 0; i < this.length; i++) {
//   //   if (this.hasOwnProperty(i)) {
//   //     const value = this[i];
//   //     const newValue = callbackFn(value, i, this);
//   //     result.push(newValue);
//   //   }
//   // }

//   return result;
// };

// function getSqaureOfNumber(num) {
//   return num * num;
// }

// // calling
// const result = sample3.myMap((d) => d * 2);
// console.log(result);

//final code

const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (callbackFn) {
  if (typeof callbackFn != 'function') {
    throw new TypeError('callbackFn is not a function');
  }

  const result = new Array(this.length);

  let flag = 0;

  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag];
      const newValue = callbackFn(value, flag, this);
      result[flag] = newValue;
    }
    flag++;
  }
  return result;
};

function getSqaureOfNumber(num) {
  return num * num;
}

const result = sample3.myMap(getSqaureOfNumber);
console.log(result);

const result4 = Array.prototype.myMap.call(sample4, (d) => d * 2);
console.log(result4);
