// import './style.css'
// import './scss/style.scss'

let nav = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active')
    burger.classList.toggle('burger--active')
  })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 8,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.9
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.4
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.4,
    },
    961: {
      slidesPerView: 3.4,
    }
  }
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
   myMap.geoObjects.add(myPlacemark); 
} 
