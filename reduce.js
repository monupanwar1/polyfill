// usecase

const arr = [1, 2, 3, 4, 5];

// core
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// polyfill

Array.prototype.myReduce = function (callback, initalValue) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not a function');
  }

  if (this == null) {
    throw new TypeError('invalid data');
  }

  if (!this.length && !initalValue) {
    throw new TypeError('Reduce of empty with no initial value');
  }

  const initValue = initalValue ? initalValue : this[0];
  const startValue = initalValue ? 0 : 1;

  // loop

  let accumulator = initValue;

  for (let i = startValue; i < this.length; i++) {
    const nextVal = this[i];

    accumulator = callback(accumulator, nextVal, i, this);
  }
  return accumulator;
};

const sum =arr.myReduce((acc,next)=>{
  return acc+next
})

console.log(sum);
