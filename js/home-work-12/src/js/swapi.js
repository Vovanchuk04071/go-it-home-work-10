import newTamplate from '../templates/swapi.hbs';
const article = document.querySelector('.article');

const url = 'https://swapi.dev/api/';
const people = 'people/';
fetch(url + people).then(response => {
  response.json().then(swapi => {
    console.log(swapi);
    const markup = swapi.results.map(swap => newTamplate(swap)).join('');
    console.log(markup);
    article.insertAdjacentHTML('beforeend', markup);
  });
});
