"use strict"
import images from "./gallery-item.js"

const gallery = document.querySelector('.js-gallery')
const lightBox = document.querySelector('.js-lightbox')
const lightBoxImg = document.querySelector('.lightbox__image')



window.addEventListener('scroll',
    _.throttle(() => {
    }, 300),
);



gallery.addEventListener('click', handleCliclOpen)
lightBox.addEventListener('click', handleClickClose)
gallery.addEventListener('keydown', keyPress)


function addList() {
    for (let i = 0; i < images.length; i += 1) {
        const list = document.createElement('li')
        list.classList.add('js-itemList', 'gallery__item')
        const a = document.createElement('a')
        a.classList.add('gallery__link')
        a.setAttribute('href', images[i].original)
        const img = document.createElement('img')
        img.classList.add('gallery__image')
        img.setAttribute('src', images[i].preview)
        img.setAttribute('data-source', images[i].original)
        img.setAttribute('alt', images[i].description)
        list.append(a)
        a.append(img)
        gallery.append(list)
    }
}

function handleCliclOpen(e) {
    e.preventDefault()
    const activeImg = e.target.dataset.source
    lightBox.classList.add('is-open')
    lightBoxImg.setAttribute('src', activeImg)
}


function handleClickClose(e) {
    if (e.target.previousElementSibling !== null) {
  lightBoxImg.removeAttribute('src')
    lightBox.classList.remove('is-open')
    }
  return
}

function keyPress(e) {
    if (e.key === "Escape") 
        return handleClickClose(e.target)  
}


// const sectionOne = gallery.querySelectorAll('li')
// console.log(sectionOne)
// const options = {
//   rootMargin: '50px',
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(function
// (entries, observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }, options);

// observer.observe(sectionOne);


addList()
