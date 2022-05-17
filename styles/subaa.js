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




let i = 0;
let placeholder = '';
const txt = ["GST Registration","FSSAI Lisence","Music License","E Waste License Recycling","Company Registration"] ;
const speed = 100;

const sleep=(ms=speed)=>new Promise(resolve=>setTimeout(resolve,ms))

const length=txt.length

async function type(){
   for (let j = 0; j < txt.length; j++) {
    for (let i = 0; i < txt[j].length; i++) {
        placeholder += txt[j].charAt(i);
        document.getElementById("search-box").setAttribute("placeholder",placeholder);
        await sleep()  
       }
       placeholder=''
       await sleep(500)
   }
   type()
}

type();


$(document).ready(function(){
  $('.logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
        }
    ]
  });

  $('.star-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    arrows:false,
  });
  });

  $(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 1,
      dots: true,
      infinite: true,
      speed: 300,
      autoplay:true,
      arrows:false,
    });
    });

