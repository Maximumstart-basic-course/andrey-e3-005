const login = prompt('Введите логин');

if (login === 'Admin') {
  const password = prompt('Введите пароль');

  if (password === 'qwerty') {
    alert('Добро пожаловать Admin');
  } else {
    switch (password) {
      case null:
      case '':
      case escape:
        alert('Отказано в доступе');
        break;
      default:
        alert('Введенный пароль неправильный');
    }
  }
} else if (login === 'User') {
  const pass = prompt('Введите пароль');

  if (pass === '12345') {
    alert('Добро пожаловать User');
  } else {
    switch (pass) {
      case null:
      case '':
      case escape:
        alert('Отказано в доступе');
        break;
      default:
        alert('Введенный пароль неправильный');
    }
  }
} else {
       alert('Такого логина нет в системе');
}
