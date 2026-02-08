// let student1 = {
//   name: 'Jack',
//   age: 23,
// };

// factory function
// function createStudent(studentName, studentAge) {
//   const obj = {};

//   obj.name = studentName;
//   obj.age = studentAge;

//   obj.checkAge = function () {
//     if (this.age < 21) {
//       return 1;
//     }
//   };

//   return obj;
// }

// const student2=createStudent("Jack",22)
// console.log(student2);

// other way

// function createStudent(studentName, studentAge) {
//   const obj = Object.create(studentTask);
//   obj.name = studentName;
//   obj.age = studentAge;
//   return obj;
// }

// const studentTask = {
//   checkAge: function () {
//     if (this.age < 21) {
//       console.log('Yes', this);
//     } else {
//       console.log('No', this);
//     }
//   },
// };
// const student1 = createStudent('Jack', 22);
// console.log(student1)
// student1.checkAge()

// now explore proto proto is a special type of object

function MakeStudent(name, age) {
  this.name = name;
  this.age = age;
}

const studentTask = {
  checkAge: function () {
    if (this.age < 21) {
      console.log('Yes', this);
    } else {
      console.log('No', this);
    }
  },
};
MakeStudent.prototype.checkAge = function () {
  if (this.age < 21) {
    console.log('Yes', this);
  } else {
    console.log('No', this);
  }
};

const student1 = new MakeStudent('Jack', 22);
student1.checkAge();
