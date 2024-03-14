var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

document.getElementById("toggleMenu").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
});
