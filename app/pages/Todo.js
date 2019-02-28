const todo = {
  tasks: [],

  addTask(title, desc, dueDate) {
    const task = {
      title,
      description: desc,
      dueDate,
    };
    this.tasks.push(task);
    console.log('Добавлен таск: ', task);
  },
  getTasks(date) {
    const taskArray = todo.tasks.filter((el) => {
      if (el.dueDate === date) {
        return el;
      }
      return true;
    });
    if (taskArray.length > 0) {
      console.log(taskArray);
    } else {
      console.log(`Тасков на '${date}' нет.`);
    }
  },
  deleteTask(title) {
    todo.tasks.find((el, i) => {
      if (el.title === title) {
        todo.tasks.splice(i, 1);
        console.log('Таск удален');
        return el;
      }
      console.log(`Таск ${title} не найден`);
      return true;
    });
  },
};


// const user = [{ name: 'Bruce', surname: 'Doe' }];

// console.log(user[0].name);

// user[0].age = '41';
