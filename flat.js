const sampleData = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];

// simple
console.log(sampleData.flat(3));

// clever move
console.log(sampleData.toString().split(',').map(Number));

// polyfill

function flatten(array, level = 100) {
  const result = [];

  array.forEach(function (element) {
    if (Array.isArray(element) && level > 0) {
      result.push(...flatten(element, level - 1));
    } else {
      result.push(element);
    }
  });

  return result;
}

console.log(flatten(sampleData, 3));
