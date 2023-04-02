const brands = [
    './image/brands/Apple.png',
    './image/brands/Aser.png',
    './image/brands/Bosch.png',
    './image/brands/HP.png',
    './image/brands/Lenovo.png',
    './image/brands/Sony.png',
    './image/brands/Sumsung.png',
    './image/brands/Sumsung.png',
    './image/brands/Sumsung.png',
    './image/brands/Sumsung.png',
    './image/brands/ViewSonic.png'
];

let brandsList = document.querySelector('.brands__list');

let brandItemTemplate = document.querySelector('#brand-template').content;
let newItemTemplate = brandItemTemplate.querySelector('.brands__item');

let brandShowAll = document.querySelector('.brands__btn');
let btnText = brandShowAll.querySelector('.show-all-btn__text');
let btnIcon = brandShowAll.querySelector('.show-all-btn__icon');


brandShowAll.onclick = function () {
    brandsList.classList.toggle('brands__list--extended');
    if (brandsList.classList.contains('brands__list--extended')) {
        btnText.textContent = 'Скрыть';
        btnIcon.src = './image/icons/double_up.svg';
    } else {
        btnText.textContent = 'Показать все';
        btnIcon.src = './image/icons/double_down.svg';
    }
}

for (let i = 0; i < brands.length; i++) {
    let brand = newItemTemplate.cloneNode(true);
    let brandImage = brand.querySelector('.brands__image');

    brandImage.src = brands[i];
    brandsList.appendChild(brand);
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 16,
    slidesPerView: "auto",

    breakpoints: {
        768: {
            enabled: false
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});