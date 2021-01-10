import weatherTemplate from '../templates/weatherstack.hbs';
const article = document.querySelector('.article');

const baseUrl = 'http://api.weatherstack.com/current';

fetch(baseUrl, {
  headers: {
    access_key: '0c13c85e7f5f3c4d04264540275f14f4',
  },
}).then(response => {
  response.json().then(data => {
    console.log(data);
  });
});
