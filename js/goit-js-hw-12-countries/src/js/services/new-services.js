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

  const input = e.target;
  const inputValue = input.value;

  fetchCountries.searchQuery = inputValue;
  clearListIten();

  inputCheck(inputValue);
}
//перевірка вводу
function inputCheck(inputValue) {
  if (inputValue.length > 0) {
    fetchCountries
      .fetchCountry()
      .then(responsive => {
        responsive.data;
        console.log(responsive.data);
        numberCounties(responsive.data);
      })
      .catch(err => {
        notify.clickError();
        console.log(err);
      });
  }
}

//Пошук кількості країн

function numberCounties(items) {
  if ((items.length > 1) & (items.length <= 10)) {
    buildListManyItemMarcup(items);
  }
  if (items.length === 1) {
    buildListItemMarcup(items);
  }
  if (items.length > 10) {
    notify.clickWarning();
  }
}

//рендерінг багатьох країн
function buildListItemMarcup(items) {
  const marcup = countryMarkup(items);
  insertListItem(marcup);
}

//рендеринг однієї країни
function buildListManyItemMarcup(items) {
  const marcup = manyCountriesMarcup(items);
  insertListItem(marcup);
}
//Рендеринг в HTML
function insertListItem(marcup) {
  refs.marcupCountry.insertAdjacentHTML('beforeend', marcup);
}
function clearListIten() {
  refs.marcupCountry.innerHTML = '';
}
