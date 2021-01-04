import posts from "../menu.json"
import postFeedItemTamplate from "../templates/menu.hbs"

const refs = {
    jsMenu: document.querySelector('.js-menu'),
}

buildPostFead(posts)
function buildPostFead(posts) {
    const markup = posts.map(post => postFeedItemTamplate(post)).join('');
    refs.jsMenu.insertAdjacentHTML('beforeend', markup)
}