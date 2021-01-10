import pictureTamplate from '../templates/picture.hbs';
const article = document.querySelector('.article');

const base = 'https://pixabay.com/api/';
const reqParams = '?key=19801401-97891ad1de0f373c60ecdf3d3';
const q = '';
const min_width = '&min_width=1200';
const max_width = '&max_width=1240';
const img_type = '&image_type=photo';
const categoryNature = '&category=nature';
const order = '&order=latest';

fetch(
  base + reqParams + img_type + categoryNature + order + min_width + max_width,
).then(response => {
  response.json().then(pictures => {
    console.log(pictures);
    const marcup = pictures.hits
      .map(picture => pictureTamplate(picture))
      .join('');
    console.log(marcup);
    article.insertAdjacentHTML('beforeend', marcup);
  });
});
