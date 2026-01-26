// used to extract range of Element from existing array it return new array ,retured array contain copy of elem that means if array has nested elem same ref of nested elem are used

// [x] slice()=>return whole array by creating shallow copy
// [x] slice(start)=>return new array by copying elem from start to length of array
// [x] slice(start,end)=>range selection ,end not include

// polyfill

Array.prototype.mySlice = function (start, end) {
  const length = this.length;
  if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    const newIdx = length + start;
    start = Math.max(newIdx, 0);
  } else {
    start = Math.min(start, length);
  }

  if (end === undefined) {
    end = length;
  } else if (end < 0) {
    const newIdx = length + end;
    end = Math.max(newIdx, 0);
  } else {
    end = Math.min(end, length);
  }

  const result = [];

  for (let i = start; i < end; i++) {
    const v = this[i];
    result.push(v);
  }

  return result;
};

const arr = ['jack', 'tom', 'alex', 'hary'];

console.log(arr.slice(2));
console.log(arr.mySlice(2));
