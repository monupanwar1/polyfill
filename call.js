const villain = {
  name: 'Galactus',
};

const anotherVillain = {
  name: 'Dr.Doom',
};

// window.name="Thanos"

function showVillain() {
  console.log(this.name);
}
// showVillain()
// showVillain.call(villain)
// showVillain.call(anotherVillain)

// note if the function is not in strict mode null and undefined will be replaced with global object
// call convert string to string obj

// polyfill

// function myCall(fn, thisArg, ...args) {
//   thisArg.fn = fn;
//   const result = thisArg.fn(...args);
//   delete thisArg.fn;
//   return result;
// }

// Function.prototype.myCall=function(thisArg,...args){
//   thisArg.fn = this;
//   const result = thisArg.fn(...args);
//   delete thisArg.fn;

//   return result;
// }

Function.prototype.myCall = function (thisArg, ...args) {
  const self = thisArg || globalThis;
  const key = Symbol();

  self[key] = this;
  const result = self[key](...args);
  delete self[key];

  return result;
};

// Function.prototype.myCall = function (thisArg, ...args) {
//   return this.apply(thisArg, args);
// };

showVillain.myCall(villain);
