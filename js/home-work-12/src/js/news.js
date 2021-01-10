import newsTamplate from '../templates/news.hbs';
import spinner from './services/spinner';
import newServices from './services/news-services';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHeandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHeandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItem();
  newServices.resetPage();
  newServices.searchQuery = input.value;
  fetchArticles();

  input.value = '';
}
function loadMoreBtnHandler() {
  fetchArticles();
}

function fetchArticles() {
  spinner.show();
  newServices
    .fetchArticles()
    .then(articles => {
      spinner.hide();
      insertItem(articles);
    })
    .catch(error => {
      console.warn('error ', error);
    });
}

function insertItem(items) {
  const marcup = newsTamplate(items);
  refs.articleList.insertAdjacentHTML('beforeend', marcup);
}
// function buildListItemMarkup(items) {
//   return newsTamplate(items);
// }

function clearListItem() {
  refs.articleList.innerHTML = '';
}
