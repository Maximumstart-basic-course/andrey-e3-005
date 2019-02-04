const todo = {
  title: [],
  description: [],
  dueDate: [],
  addTask(title, desc, dueDate) {
    todo.title.push(title);
    todo.description.push(desc);
    todo.dueDate.push(dueDate);
    console.log(`Добавлен таск: { title: '${title}', description: '${desc}', dueDate: '${dueDate}'.}`);
  },
  getTasks(date) {
    todo.dueDate.filter((el, i) => {
      if (el === date) {
        console.log(`${el}, ${todo.description[i]}, ${todo.title[i]}`);
      } else {
        console.log(`Тасков на '${date}' нет.`);
      }
    });
  },
  deleteTask(title) {
    todo.title.find((el, i) => {
      if (el === title) {
        todo.title.splice(i, 1);
        console.log('Таск удален.');
      } else {
        console.log(`Таск '${title}' не найден.`);
      }
    },

    );
  },

};

const user = [{ name: 'Bruce', surname: 'Doe' }];

console.log(user[0].name);

user[0].age = '41';
