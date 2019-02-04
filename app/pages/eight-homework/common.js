

const date = document.querySelector('.date-js');
const USD = document.querySelector('.USD-js');
const EUR = document.querySelector('.EUR-js');
const GBP = document.querySelector('.GBP-js');


// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//  .then(response => response.json())
//  .then(function(data) {
//  date.innerHTML = data.time.updated;
//  USD.innerHTML = Math.round(data.bpi.USD.rate_float);
//  EUR.innerHTML = Math.round(data.bpi.EUR.rate_float);
//  GBP.innerHTML = Math.round(data.bpi.GBP.rate_float);
//  })
//  .catch(error => {
//    console.log('Request failed', error);
//  })

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function json(response) {
  return response.json();
}

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(status)
  .then(json)
  .then((data) => {
    date.innerHTML = data.time.updated;
    USD.innerHTML = Math.round(data.bpi.USD.rate_float);
    EUR.innerHTML = Math.round(data.bpi.EUR.rate_float);
    GBP.innerHTML = Math.round(data.bpi.GBP.rate_float);
  })
  .catch((error) => {
    console.log('Request failed', error);
  });

