// APPLY

const villain = {
  name: 'Galactus',
};
const anotherVillain = {
  name: 'Dr.Doom',
};

// window.name = 'Thanos';

function showVillain() {
  console.log(this);
}

Function.prototype.myApply = function (thisArg, args = []) {
  const context = thisArg || globalThis;
  // const key = Symbol();
  // context[key] = this;

  // const result = context[key](...args);
  // delete context[key];
  // return result;

  return this.call(context, ...args);
};
showVillain.myApply(villain, [2, 2, 2]);
showVillain.myApply(anotherVillain);
showVillain.myApply();
