const mobileMenuBtn = document.querySelector('.menu-button');
const mobileMenuBtnBurgerEl = mobileMenuBtn.querySelector('.menu-button__burger');
const headerMenu = document.querySelector('.header__menu');

mobileMenuBtn.addEventListener('click', () => {
  if(!mobileMenuBtnBurgerEl.classList.contains('menu-button__burger_opened')) {
    mobileMenuBtn.classList.add('menu-button_opened');
    mobileMenuBtnBurgerEl.classList.add('menu-button__burger_opened');
    headerMenu.classList.add('header__menu_opened');
  } else {
    mobileMenuBtn.classList.remove('menu-button_opened');
    mobileMenuBtnBurgerEl.classList.remove('menu-button__burger_opened');
    headerMenu.classList.remove('header__menu_opened');
  }
});

