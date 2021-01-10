const baseUrl = 'https://restcountries.eu/rest/v2/';
const axios = require('axios');

export default {
  query: '',
  fetchCountry() {
    const requestParams = `name/${this.query}`;
    return axios.get(baseUrl + requestParams);
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },
};
