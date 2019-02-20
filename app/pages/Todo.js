const todo = {
  tasks: [],

  addTask(title, desc, dueDate) {
    const task = {
      title,
      description: desc,
      dueDate,
    };
    this.tasks.push(task);
    const i = todo.tasks.length - 1;
    console.log('Добавлен таск: ', todo.tasks[i]);
  },
  getTasks(date) {
    const taskArray = todo.tasks.filter((el) => {
      if (el.dueDate == date) {
        return el;
      }
    });
    if (taskArray.length > 0) {
      console.log(taskArray[0]);
    } else {
      console.log(`Тасков на '${date}' нет.`);
    }
  },
  deleteTask(title) {
    todo.tasks.find((el, i) => {
      if (el.title == title) {
        todo.tasks.splice(i, 1);
        console.log('Таск удален');
        return el;
      }

      console.log(`Таск ${title} не найден`);
    });
  },
};


// const user = [{ name: 'Bruce', surname: 'Doe' }];

// console.log(user[0].name);

// user[0].age = '41';
