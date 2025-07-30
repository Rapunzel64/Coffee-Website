const menuOpenButton = document.querySelector("#menu-open-button");
const navLink = document.querySelector(".nav-menu .nav-link");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    /*toggle mobile menu visiblity*/
    document.body.classList.toggle("show-mobile-menu");
});

/*close menu when the close button is clicked */
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

/*close menu when the nav link is clicked */
navLink.forEach(link => {
  link.addEventListener("click", () =>menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    324: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1000: {
        slidesPerView: 3
    }
  }
});