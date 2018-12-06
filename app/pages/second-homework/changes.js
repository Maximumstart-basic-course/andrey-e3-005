// const col = prompt('Введите цвет'); // Самостоятельная работа

// if (col.toLowerCase() === 'красный') {
// 	alert('#f0000');
// } else if (col.toLowerCase() === 'белый') {
// 	alert('#f62217');
// } else if (col.toLowerCase() === 'черный') {
// 	alert('#f93736');
// } else {
// 	alert('цвет не найден');
// }

// const col = prompt('Введите цвет'); // Самостоятельная работа

// switch (col) {
//   case 'красный':
//     alert('#f0000');
//     break;
//   case 'зеленый':
//     alert('#fy455');
//     break;
//   case 'синий':
//     alert('#f97666');
//     break;
//   default:
//     alert('Некорректный цвет');
// }


let i = 0;

while (i <= 10) {
  console.log(i);
  ++i;
}

for (let j = 0; j <= 10; j++) {
  console.log(j);
}

const year = +prompt('Введите год', '1996');

switch (year) {
  case 1996:
    console.log('1996');
    break;

  case 1997:
    console.log('1997');
    break;

  case 1998:
    console.log('1998');
    break;

  default:
    console.log('Year is undefined :(');
}

const number = +prompt('What is the number?', '0'); // Ввели 1

console.log(`${number}10`); // 110

for (let k = 10; k >= 0; --k) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

let k = 10;

while (k > 0) {
   --k;
  if (k % 2 === 0) {
    console.log(k);
  }
  
  }

const isAdmin = true;

if (isAdmin) {
	alert('Привет, Admin!');
} else {
	alert('Ты точно не Admin');
}

const isAdmin = true;

isAdmin === true ? alert('Привет, Admin!') : alert('Ты точно не Admin');

// const age = +prompt('Сколько тебе лет?', '12');

// if (age === 12) {
// 	alert('Слишком мало :(');
// } else if (age === 16) {
// 	alert('Почти достаточно :[');
// } else if (age === 18) {
// 	alert('Вот сейчас в самый раз! :)');
// } else {
// 	alert('Возраст не определен %)');
// }

const age = +prompt('Сколько тебе лет?', '12');

switch (age) {
  case 12:
    alert('Слишком мало :(');
    break;
  case 16:
    alert('Почти достаточно :[');
    break;
  case 18:
    alert('Вот сейчас в самый раз! :)');
    break;
  default:
    alert('Возраст не определен %)');
}
