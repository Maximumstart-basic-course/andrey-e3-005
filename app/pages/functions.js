// const makeNoize = function (message) {
//   console.log(message);
// };


// // function person() {
// //   const name = 'John';
// //   const surname = 'Doe';
// // }

// // console.log(`Hello, ${name} ${surname}!`);

// function person() {
//   const name = 'John';
//   const surname = 'Doe';
//   console.log(`Hello, ${name} ${surname}!`);
// }

// // const addThree = (num) => {
// //   const number = 0;
// //   number = num;

// //   return +number + 3;
// // }

// const addThree = (num) => {
//   let number = 0;
//   number = num;

//   return +number + 3;
// };

// // first(); // error
// // second(); // 'Second one'

// // const first = () => {
// //   console.log('First one');
// // }

// // function second() {
// //   console.log('Second one');
// // }


// const first = () => {
//   console.log('First one');
// };
// first(); // error

// second(); // 'Second one'

// function second() {
//   console.log('Second one');
// }


// // const name = 'John';

// // (() => {
// //   const surname = 'Doe';
// //   console.log(`${name} ${surname}`);
// // })();

// // console.log(`${name} ${surname}`);

// const name = 'John';
// const surname = 'Doe';
// (() => {
//   console.log(`${name} ${surname}`);
// })();

// console.log(`${name} ${surname}`);

// const lessNumber = (a, b) => {
//   if (isNaN(a)) {
//   console.log('Введите 2 числа');
// } else if (isNaN(b)) {
//   console.log('Введите 2 числа');
// } else if (+a > +b) {
//     console.log(`Меньше ${b}`);
//   } else if (+a < +b) {
//     console.log(`Меньше ${a}`);
//   }
// };


const add = (a, b) => {
  if (isNaN(a)) {
    console.log('Введите 2 числа');
  } else if (isNaN(b)) {
    console.log('Введите 2 числа');
  } else {
    console.log(+a + +b);
  }
};

add(2, 5);

// const length = (r) => {
//   if (isNaN(r)) {
//     console.log('Введите число');
//   }  else {
//     return (2 * Math.PI * +r);
//   }
// };

const discr = (a, b, c) => {
  if (isNaN(a)) {
    console.log('Введите 3 числа');
  } else if (isNaN(b)) {
    console.log('Введите 3 числа');
  } else if (isNaN(c)) {
    console.log('Введите 3 числа');
  } else {
    console.log(b ** 2 - 4 * a * c);
  }
};

discr(2, 3, 5);

// const square = (a) => {
//   if (isNaN(a)) {
//     console.log('Введите число');
//   } else {
//     console.log(Math.pow(a, 2));
//   }
// };

// const sumTo = (num) => {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumTo(num - 1);
// };

// const fib = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   return (fib(n - 1) + fib(n - 2));
// };
