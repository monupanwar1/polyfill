// const x = function test() {
//   console.log('test',test);
// };
// x();

// [1].map(function (value) {
//   console.log(value);
//   return value + 2;

// });

// [x] named function expression used for recursive call
// if a function keyword is used in a position where its result used to store value then its a function expression,otherwise its a stands alone as a statement then its a function declaration

// [X] POWER OF NORMAL FUNCTION

// used before declaration

// show();

// function show() {
//   console.log('hello');
// }

// [x] this

// function showMessage() {
//   console.log(this);
// }

// // showMessage(); global window undefined
// showMessage.call({ name: 'kunalPanwar' });  kunalpanwar

// duplicate name are allowed

// function showMessage(num1, num2, num3) {
//   console.log(num1, num2, num3);
// }
// showMessage(1, 2, 4);

// [x] used as constructor

// function ShowMessage(name){
//   this.name=name;
// }

// const name=new ShowMessage("kunal")
// console.log(name)

//  [x] argument array like structure

// function showMessage() {
//   console.log([...arguments]);
// }

// const obj = new showMessage('X', 1, 2, 3);
// console.log(obj);



// [x] for adding event listener




// [x] arrow function
// variation1
()=>{}
// variation2
(_,a)=>{}
// variation3
()=>2
// variation4
a=>a
// variation5
()=>{}
// variation6
(a)=>{
  return 1
}


// [x] when to use arrow function

// scenario1 with timeout etc
// scenario1 with bind















