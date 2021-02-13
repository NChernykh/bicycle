const header = document.querySelector('.header__wrapper');
const navToggle = document.querySelector('.btn-reset');
const mainNav = document.querySelector('.main-nav');

const initBurger = () => {

  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.remove('main-nav--opened');
  header.classList.remove('header__wrapper--nojs');
  mainNav.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
    header.classList.toggle('header__wrapper--opened');
  });
};

export {initBurger};
