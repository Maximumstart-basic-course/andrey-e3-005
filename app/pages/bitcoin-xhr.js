const date = document.querySelector('.date-js');
const USD = document.querySelector('.USD-js');
const EUR = document.querySelector('.EUR-js');
const GBP = document.querySelector('.GBP-js');


const render = (data) => {
  date.innerHTML = data.time.updated;
  USD.innerHTML = Math.round(data.bpi.USD.rate_float);
  EUR.innerHTML = Math.round(data.bpi.EUR.rate_float);
  GBP.innerHTML = Math.round(data.bpi.GBP.rate_float);
};


const request = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      render(data);
    }
  };
  xhr.send();
};

window.addEventListener('DOMContentLoaded', request);

setInterval(request, 4000);
