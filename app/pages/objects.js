(() => {
  const cat = {
    age: 2,
    doMeow() {
      return cat.age;
    },
  };

  console.log(cat.doMeow());

  const R2D2 = {
    E: 2.718281828459045,
    PI: 3.14159265359,
    pow(x, n) {
      if (isNaN(x) || isNaN(n)) {
        console.log('Введите 2 числа');
      } else if (x === '' || n === '') {
        console.log('Введите числа');
      } else {
        return x ** n;
      }
    },
    max(a, b) {
      if (isNaN(a)) {
        console.log('Введите 2 числа');
      } else if (isNaN(b)) {
        return ('Введите 2 числа');
      } else if (+a > +b) {
        return (`${a} больше`);
      } else if (+a === +b) {
        return ('Числа равны');
      } else {
        return (`${b} больше`);
      }
    },
    min(a, b) {
      if (isNaN(a)) {
        console.log('Введите 2 числа');
      } else if (isNaN(b)) {
        return ('Введите 2 числа');
      } else if (+a < +b) {
        return (`${a} меньше`);
      } else if (+a === +b) {
        return ('Числа равны');
      } else {
        return (`${b} меньше`);
      }
    },
    add(a, b) {
      if (isNaN(a)) {
        console.log('Введите 2 числа');
      } else if (isNaN(b)) {
        return ('Введите 2 числа');
      } else {
        return (+a + +b);
      }
    },
    diam(len) {
      if (isNaN(len)) {
        console.log('Введите число');
      } else {
        return (len / R2D2.PI);
      }
    },
    discr(a, b, c) {
      if (isNaN(a)) {
        console.log('Введите 3 числа');
      } else if (isNaN(b)) {
        console.log('Введите 3 числа');
      } else if (isNaN(c)) {
        console.log('Введите 3 числа');
      } else {
        return (this.pow(b, 2) - 4 * a * c);
      }
    },
  };

  const user = {
    name: 'John',
    surname: 'Doe',
    phone: '+380971234567',
    email: 'john@example.com',
    id: '123efr24',
  };

  let counter = 0;

  for (const prop in user) {
    if (Object.prototype.hasOwnProperty.call(user, prop)) {
      counter++;
      console.log(`Свойство ${prop} имеет значение ${user[prop]}`);
    }
  }

  console.log(`Всего разобрано ${counter} свойств объекта user`);
})();
