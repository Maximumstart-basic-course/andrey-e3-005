const table = document.querySelector('.table-users');

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';


const renderUsers = usersArr => new Promise((resolve, reject) => {
  if (!usersArr || typeof (usersArr) !== 'object') reject('usersArr is not an array');
  table.innerHTML = ` 
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Phone</td>
      <td>Username</td>
      <td>Website</td>
    </tr>`;
  usersArr.forEach((el) => {
    const trContainer = document.createElement('tr');
    trContainer.innerHTML = `
      <td>${el.id}</td>
      <td>${el.name}</td>
      <td>${el.phone}</td>
      <td>${el.username}</td>
      <td>${el.website}</td>
    `;
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

  xhr.onerror = () => reject('Connection error');
  xhr.send();
});


request('GET', URL_USERS)
  .then(data => renderUsers(data))
  .then(status => console.log(status))
  .catch(err => console.error(err));

