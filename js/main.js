const menuBtn = document.getElementById('menuToggleBtn');
const mainNav = document.querySelector('.main-nav');
const rightNav = document.querySelector('.right-nav');

menuBtn.addEventListener('click', () {
  mainNav.classList.toggle('show');
  rightNav.classList.toggle('show');
});