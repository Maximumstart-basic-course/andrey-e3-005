const table = document.querySelector('.table-users');
// const th = document.querySelector('.tr-head');
// const errorDiv = document.querySelector('.error');

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';


const renderUsers = usersArr => new Promise((resolve, reject) => {
  if (!usersArr || typeof (usersArr) !== 'object') reject('usersArr is not an array');

  usersArr.forEach((el) => {
    const userId = document.createElement('td');
    const userName = document.createElement('td');
    const userPhone = document.createElement('td');
    const userUsername = document.createElement('td');
    const userWebsite = document.createElement('td');

    userId.innerText = el.id;
    userName.innerText = el.name;
    userPhone.innerText = el.phone;
    userUsername.innerText = el.username;
    userWebsite.innerText = el.website;

    const trContainer = document.createElement('tr');
    trContainer.appendChild(userId);
    trContainer.appendChild(userName);
    trContainer.appendChild(userPhone);
    trContainer.appendChild(userUsername);
    trContainer.appendChild(userWebsite);
    table.appendChild(trContainer);
  });
  resolve('OK');
});

const request = (method, url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    } else if (xhr.status === 404) {
      console.error('warning', 'task not found');
    } else if (xhr.status === 400) {
      console.error('error', JSON.parse(xhr.responseText).error);
    } else if (xhr.status === 500) {
      console.error('error', 'Server eror');
    }
  };

  xhr.onerror = () => console.error('error', 'Connection error');
  xhr.send();
});


request('GET', URL_USERS)
  .then(data => renderUsers(data))
  .then(status => console.log(status))
  .catch(err => console.error(err));

