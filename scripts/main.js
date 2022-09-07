const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });




function displayWindowSize(){
    const newWidth = document.documentElement.clientWidth
    if ( newWidth >= 950){
        let hamMenu = document.getElementById("hamburger-menu")
        hamMenu.style=display ='block';


    }
}


window.addEventListener("resize", displayWindowSize)



function showMenu() {
const hamMenu = document.getElementById("hamburger-menu")
if (hamMenu.style.display === "block") {
hamMenu.style.display = "none"
} else {
hamMenu.style.display = "block"
}
}



 setInterval(()=> document.getElementById('swiper-right-handle').click(), 3000)
  console.log('this thing ran'+`${i}`)


