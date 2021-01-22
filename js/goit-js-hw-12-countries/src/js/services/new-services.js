import fetchCountries from '../fetchCountries';
import countryMarkup from '../../templates/country.hbs';
import manyCountriesMarcup from '../../templates/many-countries.hbs';
import notify from './notify';
var debounce = require('lodash.debounce');

const refs = {
  searchForm: document.querySelector('#input'),
  marcupCountry: document.querySelector('.country-name'),
};

refs.searchForm.addEventListener(
  'input',
  debounce(searchFormSubmitHeandler, 500),
);

function searchFormSubmitHeandler(e) {
  e.preventDefault();

  const inputValue = e.target.value;

  fetchCountries.searchQuery = inputValue;
  clearMarcup();

  fetch(inputValue);
}
//перевірка вводу
function fetch(inputValue) {
  if (inputValue.length > 0) {
    fetchCountries
      .fetchCountry()
      .then(responsive => {
        responsive.data;
        
        createMarcup(responsive.data);
      })
      .catch(err => {
        notify.clickError();
        console.log(err);
      });
  }
}

//Пошук кількості країн

function createMarcup(items) {
  if (items.length > 1 && items.length <= 10) {
    rendelItems(items);
  }
  if (items.length === 1) {
    renderExpandedItem(items);
  }
  if (items.length > 10) {
    notify.clickWarning();
  }
}

//рендерінг багатьох країн
function renderExpandedItem(items) {
  const marcup = countryMarkup(items);
  insertMarcup(marcup);
}

//рендеринг однієї країни
function rendelItems(items) {
  const marcup = manyCountriesMarcup(items);
  insertMarcup(marcup);
}
//Рендеринг в HTML
function insertMarcup(marcup) {
  refs.marcupCountry.insertAdjacentHTML('beforeend', marcup);
}
function clearMarcup() {
  refs.marcupCountry.innerHTML = '';
}
