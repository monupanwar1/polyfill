// syntax

// const arr = Array.filter(callback, thisArg);
// function callback(element, index, Arr) {
//   return true;
// }

const arr = [1, 2, 3, 4];

// base

// const obj = { name: 'magic' };

// function transformFunction(value, index, arr) {
//   console.log(this)
//   return value % 2 === 0;
// }

// const newArray = filterFunction(arr, transformFunction,obj);
// console.log(newArray);

// function filterFunction(dataArray, callbackFunction, thisArg) {
//   const result = [];

//   for (let i = 0; i < dataArray.length; i++) {
//     const value = dataArray[i];

//     const needToAdd = callbackFunction.call(thisArg,value, i, dataArray);

//     needToAdd && result.push(value);
//   }

//   return result;
// }

Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError('callbackFn  is not a function');
  }

  const result = [];

  let flag = 0;

  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag];

      const needToAdd = callbackFn.call(thisArg, value, flag, this);

      if (needToAdd) {
        result.push(value);
      }
    }

    flag++;
  }

  return result;
};

function transformFunction(element, index, Array) {
  return element % 2 === 0;
}

const res = arr.myFilter(transformFunction);

console.log(res);
