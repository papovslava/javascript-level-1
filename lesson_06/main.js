const items = [
  {
    "id": 780705,
    "author": "Денис Дроздов",
    "title": "Как строилась Москва",
    "price": 960,
    "link": "https://www.labirint.ru/books/780705/",
    "cover": "./img/cover_780705.png" 
  },
  {
    "id": 779844,
    "author": "Маша Рупасова",
    "title": "Веселая фразеология",
    "price": 672,
    "link": "https://www.labirint.ru/books/779844/",
    "cover": "./img/cover_779844.png"
  },
  {
    "id": 775365,
    "author": "Тамара Михеева",
    "title": "Тайник в доме художника",
    "price": 848,
    "link": "https://www.labirint.ru/books/775365/",
    "cover": "./img/cover_775365.png"
  },
  {
    "id": 709225,
    "author": "Станислав Олефир",
    "title": "Иду по тайге",
    "price": 1134,
    "link": "https://www.labirint.ru/books/709225/",
    "cover": "./img/cover_709225.png"
  },
  {
    "id": 783722,
    "author": "Софья Ремез",
    "title": "Тихие игры",
    "price": 496,
    "link": "https://www.labirint.ru/books/783722/",
    "cover": "./img/cover_783722.png"
  }      
];

const itemsDOM = document.querySelector('#items');
let cart = [];

for (let item of items) {
  itemsDOM.appendChild(createItemDOM(item));
}


function createItemDOM(item) {
  this.itemTemplateDOM = this.itemTemplateDOM ?? itemsDOM.querySelector('#item_template');

  let itemDOM = this.itemTemplateDOM.cloneNode(true);
  itemDOM.style.display = 'block';
  itemDOM.setAttribute('id', item.id);
  // itemDOM.removeAttribute('id');

  let titleDOM = itemDOM.querySelector('[data-title]');
  titleDOM.setAttribute('data-title', item.title);
  titleDOM.innerText = item.title;

  let coverDOM = itemDOM.querySelector('[data-cover]');
  coverDOM.setAttribute('data-cover', item.cover);
  coverDOM.setAttribute('src', item.cover);

  let priceDOM = itemDOM.querySelector('[data-price]');
  priceDOM.setAttribute('data-price', item.price);
  priceDOM.innerText = item.price;

  return itemDOM;
}

function addToCart(event) {
  let rndItemIndex = (Math.random() * (items.length-1)).toFixed();
  updateCart(+event.target.parentNode.getAttribute('id'));
  drawCartDOM(cart);
  itemsDOM.appendChild(createItemDOM(items[rndItemIndex]));
}


function drawCartDOM(cart) {
  let total = 0;
  this.cartDOM = this.cartDOM ?? document.querySelector('#cart');
  this.cartDOM.innerText = '';
  for (let item of cart) {
    let itemInCartDOM = document.createElement("P");
    itemInCartDOM.innerText = `${item.title}: ${item.amount} шт. по ${item.price} руб.`;
    this.cartDOM.appendChild(itemInCartDOM);
    total += item.price * item.amount;
  }
  let totalDOM = document.createElement("P");
  totalDOM.innerText = `итого: ${total} руб.`;
  this.cartDOM.appendChild(totalDOM);
}


function updateCart(selectedItemID) {
  document.getElementById(selectedItemID).remove();
  for (let item of cart) {
    if (selectedItemID === item.id) {
      item.amount += 1;
      return;
    }
  }
  for (let item of items) {
    if (selectedItemID === item.id) {
      cart.push({...item});
      cart[cart.length-1].amount = 1;
      return;
    }
  }
  console.log(cart);
}