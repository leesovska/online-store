const items = [
  {
    title: "Свеча `Bubbles`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 7*7 см",
    tags: ["hit"],
    price: 7,
    img: "./img/1.jpg",
    rating: 4.4,
  },
  {
    title: "Свеча `Spiral",
    description: "100% соевый воск, хлопковый фитиль. Размер: 15*9 см",
    tags: ["sale"],
    price: 15,
    img: "./img/2.jpg",
    rating: 4.6,
  },
  {
    title: "Набор свечей `Lotos`",
    description: "100% соевый воск, хлопковый фитиль. Ко-во: 3 шт",
    tags: ["sale"],
    price: 17,
    img: "./img/3.jpg",
    rating: 5,
  },
  {
    title: "Свеча `Pumpkin`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 7*6 см",
    tags: ["halloween"],
    price: 6,
    img: "./img/4.jpg",
    rating: 4.4,
  },
  {
    title: "Свеча `Chanel`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 17*9 см",
    tags: ["exclusive"],
    price: 25,
    img: "./img/5.jpg",
    rating: 4.3,
  },
  {
    title: "Свеча `Easter Bunny`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 12*8 см",
    tags: ["easter"],
    price: 10,
    img: "./img/6.jpg",
    rating: 5,
  },
  {
    title: "Свеча `David`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 14*7 см",
    tags: ["hit"],
    price: 18,
    img: "./img/7.jpg",
    rating: 4.9,
  },
  {
    title: "Набор свечей `Quatro`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 15*10 см. Ко-во: 4 шт",
    tags: ["sale"],
    price: 35,
    img: "./img/8.jpg",
    rating: 4.6,
  },
  {
    title: "Набор свечей `Classic`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 20*3 см. Ко-во: 3 шт",
    tags: ["hit"],
    price: 17,
    img: "./img/9.jpg",
    rating: 4.4,
  },
  {
    title: "Набор свечей `Twist`",
    description: "100% соевый воск, хлопковый фитиль. Размер: 17*2,5 см. Ко-во: 5 шт",
    tags: ["hit"],
    price: 20,
    img: "./img/10.jpg",
    rating: 4.4,
  },
  {
    title: "Набор свечей `Roses Box`",
    description: "100% соевый воск, хлопковый фитиль. Ко-во: 6 шт. Пластиковый бокс",
    tags: ["exclusive"],
    price: 25,
    img: "./img/11.jpg",
    rating: 4,
  },
  {
    title: "Подарочный набор `Take My Hand`",
    description: "100% соевый воск, деревянный и хлопковый фитиль. Гипсовый декор",
    tags: ["sale"],
    price: 30,
    img: "./img/12.jpg",
    rating: 5,
  },
  {
    title: "Подарочный набор `You&Me`",
    description: "100% соевый воск, деревянный и хлопковый фитиль. Гипсовый декор",
    tags: ["sale"],
    price: 30,
    img: "./img/13.jpg",
    rating: 5,
  },
  {
    title: "Подарочный набор `Torso`",
    description: "100% соевый воск, деревянный и хлопковый фитиль. Гипсовый декор",
    tags: ["sale"],
    price: 30,
    img: "./img/14.jpg",
    rating: 5,
  },
  {
    title: "Подарочный набор `Flower Girl`",
    description: "100% соевый воск, деревянный и хлопковый фитиль. Гипсовый декор",
    tags: ["sale"],
    price: 30,
    img: "./img/15.jpg",
    rating: 4.4,
  },
  {
    title: "Свеча в гипсе `My Hands`",
    description: "100% соевый воск, деревянный фитиль. Гипсовый декор",
    tags: ["exclusive"],
    price: 25,
    img: "./img/16.jpg",
    rating: 4.7,
  },
  {
    title: "Свеча в гипсе `Spring`",
    description: "100% соевый воск, деревянный фитиль. Гипсовый декор",
    tags: ["hit"],
    price: 25,
    img: "./img/17.jpg",
    rating: 4,
  },
  {
    title: "Набор Аромосаше",
    description: "100% соевый воск, аромомасла, сухоцветы. Аромат: цветочный",
    tags: ["hit"],
    price: 10,
    img: "./img/18.jpg",
    rating: 4.9,
  },
  {
    title: "Аромосаше",
    description: "100% соевый воск, аромомасла, сухоцветы. Аромат: роза и жасмин",
    tags: ["hit"],
    price: 5,
    img: "./img/19.jpg",
    rating: 5,
  },
  {
    title: "Аромосаше",
    description: "100% соевый воск, аромомасла, сухоцветы. Аромат: корица и апельсин",
    tags: ["hit"],
    price: 5,
    img: "./img/20.jpg",
    rating: 5,
  },
  {
    title: "Набор свечей `Happy Easter`",
    description: "100% соевый воск, хлопковый фитиль. Ко-во в наборе: 8 шт",
    tags: ["easter"],
    price: 25,
    img: "./img/21.jpg",
    rating: 5,
  },
  {
    title: "Набор из гипса: шкатулка и поднос",
    description: "Декоративный гипс. Палитра: белый, молочный, бежевый, карамель",
    tags: ["hit"],
    price: 20,
    img: "./img/22.jpg",
    rating: 4.4,
  },
  {
    title: "Поднос из гипса",
    description: "Декоративный гипс. Палитра: белый, молочный, бежевый, карамель",
    tags: ["hit"],
    price: 10,
    img: "./img/23.jpg",
    rating: 4.3,
  },
  {
    title: "Подставка декоративная `Shell`",
    description: "Декоративный гипс. Палитра: бежевый",
    tags: ["sale"],
    price: 6,
    img: "./img/24.jpg",
    rating: 4.8,
  },
  {
    title: "Набор из гипса: поднос, шкатулка, подставка `Shell`",
    description: "Декоративный гипс. Палитра: зеленый",
    tags: ["exclusive"],
    price: 30,
    img: "./img/25.jpg",
    rating: 4.9,
  },
  {
    title: "Набор из гипса: шкатулка и поднос",
    description: "Декоративный гипс. Палитра: розовый микс",
    tags: ["exclusive"],
    price: 23,
    img: "./img/26.jpg",
    rating: 4.4,
  },
  {
    title: "Поднос из гипса для свечей",
    description: "Декоративный гипс. Палитра: бежевый, розовый, оливковый",
    tags: ["hit"],
    price: 20,
    img: "./img/27.jpg",
    rating: 4.8,
  },
  {
    title: "Поднос из гипса",
    description: "Декоративный гипс. Палитра: молочный, розовый",
    tags: ["sale"],
    price: 8,
    img: "./img/28.jpg",
    rating: 5,
  },
];

//Верстка карточек
const itemTemplate = document.querySelector('#item-template');
const itemsContainer = document.querySelector('#shop-items');
const nothingFound = document.querySelector('#nothing-found');

function prepareShopItem(shopItem) {
  const { title, description, tags, img, price } = shopItem;
  const itemClone = itemTemplate.content.cloneNode(true);

  itemClone.querySelector('h1').textContent = title;
  itemClone.querySelector('p').textContent = description;
  itemClone.querySelector('.price').textContent = `$${price}`;
  itemClone.querySelector('img').src = img;

  const tagsContainer = itemClone.querySelector('.tags');
  tags.forEach((tag) => {
    const tagSpan = document.createElement('span');
    tagSpan.classList.add('tag');
    tagSpan.textContent = tag;
    tagsContainer.append(tagSpan);
  });

  const ratingContainer = itemClone.querySelector('.rating');
  for (let i = 0; i < shopItem.rating; i++) {
    const ratingStar = document.createElement('i');
    ratingStar.classList.add('fa', 'fa-star');
    ratingContainer.append(ratingStar);
  }

  return itemClone;
}

//Отрисовка карточек
let currentState = [...items];

function renderItems(arr) {
  nothingFound.textContent = '';
  itemsContainer.innerHTML = '';
  arr.forEach(item => {
    const itemCard = prepareShopItem(item);
    itemsContainer.append(itemCard);
  })

  if (!arr.length) {
    nothingFound.textContent = 'Ничего не найдено';
  }
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

//Функция-хелпер для сортировки по алфавиту
function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

//Сортировка по критериям
const sortControl = document.querySelector('#sort');

sortControl.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case 'expensive': {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case 'cheap': {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case 'rating': {
      currentState.sort((a, b) => b.rating - a.rating);
      break;
    }
    case 'alphabet': {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }

  renderItems(currentState);
});


//Поиск по товарам
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

function applySearch() {
  const searchString = searchInput.value.trim().toLowerCase();

  currentState = items.filter((item) =>
    item.title.toLowerCase().includes(searchString)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  sortControl.selectedIndex = 0;

  renderItems(currentState);
};

searchBtn.addEventListener('click', applySearch);
searchInput.addEventListener('search', applySearch);