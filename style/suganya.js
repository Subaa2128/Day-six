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
