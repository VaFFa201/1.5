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

const brandsList = document.querySelector('.brands__list');

const brandItemTemplate = document.querySelector('.brand-template').content;
const newItemTemplate = brandItemTemplate.querySelector('.brands__item');

const brandShowAll = document.querySelector('.brands__btn');
const brandShowAllText = brandShowAll.querySelector('.show-all-btn__text');
const brandShowAllIcon = brandShowAll.querySelector('.show-all-btn__icon');


brandShowAll.onclick = function () {
    brandsList.classList.toggle('brands__list--extended');
    if (brandsList.classList.contains('brands__list--extended')) {
        brandShowAllText.textContent = 'Скрыть';
        brandShowAllIcon.src = './image/icons/double_up.svg';
    } else {
        brandShowAllText.textContent = 'Показать все';
        brandShowAllIcon.src = './image/icons/double_down.svg';
    }
}

for (let link of brands) {
    let brand = newItemTemplate.cloneNode(true);
    const brandImage = brand.querySelector('.brands__image');

    brandImage.src = String(link);
    brandsList.appendChild(brand);
}

let isSwiperExist = false;
let swiper = new Swiper();

let swiperSwitch = function () {
    if (!window.matchMedia("(min-width: 768px)").matches) {
        if (!isSwiperExist) {
            isSwiperExist = true;

            swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                spaceBetween: 16,
                slidesPerView: "auto",

                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    } else if (isSwiperExist) {
        isSwiperExist = false;
        swiper.destroy();
    }
}

window.addEventListener("resize", swiperSwitch);

