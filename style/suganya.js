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
