const axios = require('axios').default;
const baseUrl = 'https://pixabay.com/api/';
const key = '19801401-97891ad1de0f373c60ecdf3d3';

export default {
  page: 1,
  query: 'all',
  fetchImages() {
    const requestParams = `?key=${key}&image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12`;
    this.incrementPage();
    return axios.get(baseUrl + requestParams);
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
