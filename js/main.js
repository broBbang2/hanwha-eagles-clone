const menuBtn = document.getElementById('menuToggleBtn');
const mainNav = document.querySelector('.main-nav');
const rightNav = document.querySelector('.right-nav');

menuBtn.addEventListener('click', function () {
  mainNav.classList.toggle('show');
  rightNav.classList.toggle('show');
});

const swiper = new Swiper(".match-swiper", {
  loop: false,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
},
  slidesPerView: 3,
  spaceBetween: 24,
});
