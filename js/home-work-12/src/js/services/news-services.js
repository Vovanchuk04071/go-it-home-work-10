const baseUrl = 'http://newsapi.org/v2/top-headlines';

export default {
  page: 1,
  query: '',
  fetchArticles(query) {
    const options = {
      headers: { Authorization: '1d11ea7ffc8b4efd8963a2d21e34a66c' },
      page: 1,
    };
    const requestParams = `?q=${this.query}&page=${this.page}`;

    return fetch(baseUrl + requestParams, options)
      .then(responsive => responsive.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.articles;
      });
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
