$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('.header').addClass('black');
    }
    else{
        $('.header').removeClass('black');
    }
})

const btn=document.querySelector(".close-nav-menu")
const bar=document.querySelector(".navbar")

function openMenu() {
    bar.style.display="block"

}

function closeMenu() {
    bar.style.display="none"

}