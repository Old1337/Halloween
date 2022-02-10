const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close"),
  navImage = document.getElementById("nav_img");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navImage.style.top = "0px";
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navImage.style.top = "-75px";
  });
}

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

const homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clicklable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const newSwiper = new Swiper(".new_swiper", {
  centeredSlider: true,
  slidesPreview: "auto",
  spaceBetween: 16,
  loop: "true",
});

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 400) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll(`section[id]`);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

function scrollUp() {
  const scroll = document.getElementById("scroll_top");
  if (this.scrollY >= 460) scroll.classList.add("show_scroll");
  else scroll.classList.remove("show_scroll");
}

window.addEventListener("scroll", scrollUp);
