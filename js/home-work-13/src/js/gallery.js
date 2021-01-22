import './gallery';
import newService from './services/services';
import galleryMarcup from '../templates/gallery.hbs';
import nofity from './services/pnofity';
import spinner from './services/spiner';

var debounce = require('lodash.debounce');

const refs = {
  forms: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.forms.addEventListener('input', debounce(searchFormSubmitHeandler, 500));

function searchFormSubmitHeandler(e) {
  e.preventDefault();

  const inputValue = e.target.value;
  newService.searchQuery = inputValue;
  newService.resetPage();
  clearMarcup();
  fetch();
}
// підгрузка базовою галереї
fetch();

function fetch(inputValue) {
  spinner.show();
  newService.fetchImages().then(res => {
    spinner.hide();
    const fetchTotal = res.data.total;
    if (fetchTotal === 0) {
      nofity.clickWarning();
    } else {
      creatMarcup(res);
    }
  });
}

function creatMarcup(items) {
  const marcup = galleryMarcup(items.data.hits);
  insertMarcup(marcup);
}

function insertMarcup(marcup) {
  refs.gallery.insertAdjacentHTML('beforeend', marcup);
  observerActive();
}

function clearMarcup() {
  refs.gallery.innerHTML = '';
}

// настройки Обсервер
const options = {
  root: document.querySelector('.scroll-list'),
  rootMargin: '500px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  // для каждой записи-целевого элемента
  entries.forEach(entry => {
    // если элемент является наблюдаемым
    if (entry.isIntersecting) {
      fetch();
    }
  });
}, options);

function observerActive() {
  const target = document.querySelector('#sentinel');
  observer.observe(target);
}
