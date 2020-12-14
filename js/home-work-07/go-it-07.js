"use strict"

// Завдання №1
// const categories = document.querySelector('#categories')
// const totalList = categories.children.length
// console.log(`В списке ${totalList} категории`)
// // console.log(categories)

// const items = document.querySelectorAll('.item')
// items.forEach(item => {
//   console.log(item.firstElementChild)

//   console.log(`Количество елементов: ${ item.querySelectorAll('li').length }`)
// }
// )

// Завдання №2
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const products = document.querySelector('#ingredients')
// console.log(products)

// const items = [];

// for (let i = 0; i < 6; i += 1) {
// const productsItem = document.createElement('li')
// productsItem.setAttribute('class', 'products_item')
// productsItem.textContent = ingredients[i] 
//   items.push(productsItem)
// }
// products.append(...items)

// Завдання №3

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector('#gallery')


// // for (let i = 0; i < images.length; i += 1) {
// // gallery.insertAdjacentHTML('afterbegin', '<li><img></img></li>');
// // const img = gallery.querySelector('img')
// // img.setAttribute('src', images[i].url)
// // img.setAttribute('alt', images[i].alt)
// // }

// images.reverse().forEach((image) => {
//   gallery.insertAdjacentHTML('afterbegin', '<li><img></img></li>');
// const img = gallery.querySelector('img')
// img.setAttribute('src', image.url)
// img.setAttribute('alt', image.alt)
// })

// Завдання №4

// const counter = document.querySelector('#counter')
// const btnRemove = document.querySelector('[data-action="decrement"]')
// const btnAdd = document.querySelector('[data-action="increment"]')
// const value = document.querySelector('#value')

// let counterValue = 0;

// function increment () {
//   counterValue += 1
//   value.textContent = counterValue
// }

// function decrement  () {
//   counterValue -= 1
//   value.textContent = counterValue
// }

// btnRemove.addEventListener('click', decrement)
// btnAdd.addEventListener('click', increment)

// Завдання №5
// const name = document.querySelector('#name-input')
// const nameOutput = document.querySelector('#name-output')

// name.addEventListener('input', changeName)

// function changeName(e) {
//   if (e.target.value === "") {
//     nameOutput.textContent = ('незнакомец')
//   }
//   else {
//     nameOutput.textContent = e.target.value
//   }
// }

// Завдання №6

// const validationInput = document.querySelector('#validation-input')

// validationInput.addEventListener('blur', lengthChecking)

// function lengthChecking(e) {
//   if (e.target.value.length === Number(e.target.dataset.length)) {
//     validationInput.classList.remove('invalid')
//     e.target.classList.add('valid');
//   }
//   else {
//     validationInput.classList.remove('valid')
//     e.target.classList.add('invalid')
//   }
// }

// Завдання №7

// const fontSize = document.querySelector('#font-size-control')
// const text = document. querySelector('#text')

// console.log(text.innerHTML)
// fontSize.addEventListener('input', textSize)

// function textSize(e) {
//   text.style.fontSize = e.target.value + 'px'
//   // text.style.fontSize = `${e.target.value}px`
// }

// Завдання №8

const controls = document.querySelector('#controls')
const btnAdd = document.querySelector('[data-action="render"]')
const btnRemove = document.querySelector('[data-action="destroy"]')
const boxes = document.querySelector('#boxes')
const input = document.querySelector('input')

btnAdd.addEventListener('click', createBoxes)
btnRemove.addEventListener('click', destroyBoxes)

const divBoxes = [];
const itemb = '35';
function createBoxes() {
    const amount = input.value
  for (let i = 1; amount >= i; i += 1) {
    
    let newBox = document.createElement('div')
    newBox.style.width = "30px";
    newBox.style.height = "${itemb}px";
    newBox.style.backgroundColor = randColor()
    boxes.prepend(newBox)
  }
}

function destroyBoxes() {
  const amount = input.value
  for (let i = 1; amount >= i; i += 1) {
    let delBox = boxes.querySelector('div')
    delBox.remove()
  }
}

// function enlargementSize() {
//   let width; 
//   width = width + '10px'
//   // height = height + '10px'
// }


function randColor(){
    let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
    return `rgb(${rand()},${rand()},${rand()})`;
}


console.log(divBoxes)


// function createBoxes() {
//     const amount = input.value
//   for (let i = 1; amount >= i; i += 1) {
//     let newBox = document.createElement('div')
    
//     newBox.style = "width: 30px; heigth: 30px";
//     // newBox.style.height = "${heigth}px";
//     newBox.style.backgroundColor = randColor()
//     boxes.prepend(newBox)
//   }
// }