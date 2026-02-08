// kunal window
// let/const block scope
// var local global function scope

// Data Types
// Primitive
// undefined
// null
// Number
// BigInt
// Symbol
// String
// Boolean

// Non-Primitive
// Object

// for type conversion use type

// let a =10;
// let b =String(a);
// console.log(typeof(b));

// let a =true;
// let b =String(a);
// console.log(typeof(b));

// let a =0;
// let b =String(a);
// console.log(typeof(b));
// console.log(b)

// let a = 1000;
// let b = BigInt(a);
// console.log(typeof b);
// console.log(b);

// 02----------->some advance
// closure

// function show() {
//   let counter = 0;

//   return {
//     update: function () {
//       console.log(`${counter++}`);
//     },
//   };
// }

// let ans =show();
// ans()

// iifee
// (function greet() {
//   let name = 'kunal';
//   console.log(`welcome 😉${name}`);
// })();

// for (let i = 0; i < 20; i++) {
//   (function (flag) {
//     setTimeout(() => {
//       console.log(flag);
//     }, 1000);
//   })(i);
// }

// currying

// function sumWithCurrying(n1, n2) {
//   const offset = getDataFromApi();
//   return n1 + n2 + offset;
// }
// let ans = sumWithCurrying(2, 3);
// console.log(ans);

// function getDataFromApi() {
//   return 2;
// }

// 03 ---->internals

// [x]  hoisting-->in case of function its body add to scope if it contain variables then they are init by their deault values

// console.log(name)
// var name='Jack✅'
// console.log(name); //jack
// // show()
// function show() {
//   console.log(age); //undefined
//   var age = 30;
// }

// show()
// function show() {
//   console.log(age); //ref error same for let ans const
//   let age = 30;
// }

// tdz is the area above the decleration of let and const

// var show = 9;

// function show() {
//   console.log(age);
//   var age = 20;
// }
// console.log(show);  9

// this

// [x] this depend on how we call function

// Arrow function rule
// [x] is function invoke with new key then value is newly created value

// [x] call bind apply
// [x] obj.show //obj
// [x] window undefined

// function x(){
//   console.log(this); //{}
// }
// new x(); //constructor call

// function show() {
//   console.log('inside show'); //inside show
// }
// show();

// function show() {
//   console.log('inside show', this.name);
// }

// const obj = { name: 'Lion' };
// const person = { name: 'silver' };
// const hero = { name: 'jack' };

// show.call(obj);  //obj value
// show.call(person);
// show.call(hero);

// call apply bind all those help to set-the value of this

// [x] in call arguments seprated by ,
// [x] in apply arguments seprated by [],
// [x] bind change this permanently and return new fnc

// const obj = {
//   name: 1,
//   fn: function () {
//     console.log(this.name);
//   },
// };
// obj.fn();

// const obj = {
//   name: 1,
//   fn: function () {
//     console.log(this.name);
//   },
// };
// const x = obj.fn;
// x(); //undefined

// example

// const obj = {
//   message: 'Hello',
//   getMessage() {
//     const message = 'hello earth';
//
//   },
// };

// console.log(obj.getMessage()); //hello

// function show(){
//   console.log("hello",this);
// }
// show()
// const x ="dev";
// show.apply(x);

// this for arrow function
// [x] arrow function this set when fnc write
// const pr = () => {
//   console.log(this);
// };
// pr() //{}

// const obj = {
//   name: 'k',
//   fn1: function () {
//     console.log(this.name);
//   },

//   fn2: () => {
//     console.log(this.name);
//   },
// };

// obj.fn1(); k
// obj.fn2();undefined window

// const obj = {
//   fruit: 'mango',
//   fn1: function () {
//     console.log(this.fruit);
//   },
// };

// setTimeout(obj.fn1.bind(obj), 100);
