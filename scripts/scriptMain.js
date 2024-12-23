//Hamburger icon and responsive menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});   


//Adding the phone link to the menu

//see if the phone icon hasn't already been added
//this entire god damn section is unnecessary -_______-
// let repFlag = false;

// function displayPhoneLink(){

//  const newWidth = document.documentElement.clientWidth
//   if ( newWidth <= 1110){
//     if(!repFlag){
//    repFlag = true;
//    let phoneSpan = document.createElement('span')
//    phoneSpan.appendChild(document.createTextNode('(+98)9352487000'))
//    let phoneLink = document.createElement('a')
//    phoneLink.href = './'
//    phoneLink.appendChild(phoneSpan)
//    let newListItem = document.createElement('li')
//    newListItem.id = 'list-item-phone'
//    newListItem.appendChild(phoneLink)
//    let listItems = document.querySelector('ul')
//    listItems.appendChild(newListItem)
//                       }
//           }
//     else
//       {
//         repFlag = false;
//         let listItem = document.querySelector('#list-item-phone')

//         try { 
//             listItem.remove()
//          } 
//        catch(error){    
//          // Suppress the error
//        }

//         }

// }

// window.addEventListener("resize", displayPhoneLink)
// window.addEventListener("load", displayPhoneLink)



//Slider options
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


//Moving the slider
 setInterval(()=> document.getElementById('swiper-right-handle').click(), 3000)


