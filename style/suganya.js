// navbar shadow

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".navbar_brand").addClass("shadow");
  } else {
    $(".navbar_brand").removeClass("shadow");
  }
});

// close_menu and open_menu

const btn = document.querySelector(".close_menu");
const bar = document.querySelector(".navbar");

function openMenu() {
  bar.style.display = "inline";
}
function closeMenu() {
  bar.style.display = "none";
}

// type runing
let i = 0;
let placeholder = "";
const txt = [
  "GST Registration",
  "FSSAI Lisence",
  "Music License",
  "E Waste License Recycling",
  "Company Registration",
];
const speed = 100;

const sleep = (ms = speed) => new Promise((resolve) => setTimeout(resolve, ms));

const length = txt.length;

async function type() {
  for (let j = 0; j < txt.length; j++) {
    for (let i = 0; i < txt[j].length; i++) {
      placeholder += txt[j].charAt(i);
      document
        .getElementById("search-box")
        .setAttribute("placeholder", placeholder);
      await sleep();
    }
    placeholder = "";
    await sleep(500);
  }
  type();
}
type();

//swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".star_slide").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
});

$(document).ready(function () {
  $(".news_slider").slick({
    slidesToShow: 1,
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".button-fixed").fadeIn();
    } else {
      $(".button-fixed").fadeOut();
    }
  });

  $(".button-fixed").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });
});
