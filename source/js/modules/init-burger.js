const header = document.querySelector('.header__wrapper');
const navToggle = document.querySelector('.btn-reset');
const mainNav = document.querySelector('.main-nav');

const initBurger = () => {

  if (mainNav) {
    mainNav.classList.remove('main-nav--nojs', 'main-nav--opened');

    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav--opened');
      header.classList.toggle('header__wrapper--js');
    });
  }
};

export {initBurger};
