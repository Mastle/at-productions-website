//Displaying Hamburger menu
function showMenu() {
    const hamMenu = document.getElementById("hamburger-menu")
    if (hamMenu.style.display === "block") {
    hamMenu.style.display = "none"
    } else {
    hamMenu.style.display = "block"
    }
    }
    



//Display the nav menu after resizing
function displayNavBar(){
    const newWidth = document.documentElement.clientWidth
    let hamMenu = document.getElementById("hamburger-menu")
    if ( newWidth > 1110){
        hamMenu.style.display ='block';
    }
    
    else if ( newWidth <= 1110){
        hamMenu.style.display = 'none';

    }
}

window.addEventListener("resize", displayNavBar)





//Adding the phone link to the hamburger menu
function displayPhoneLink(){
 const newWidth = document.documentElement.clientWidth
  if ( newWidth <= 1110){
    if(!repFlag){
   repFlag = true;
   let phoneSpan = document.createElement('span')
   phoneSpan.className = 'phone-number'
   phoneSpan.appendChild(document.createTextNode('(+98)9352487000'))
   let phoneLink = document.createElement('a')
   phoneLink.href = './'
   phoneLink.appendChild(phoneSpan)
   let newListItem = document.createElement('li')
   newListItem.id = 'list-item-phone'
   newListItem.appendChild(phoneLink)
   let listItems = document.querySelector('ul')
   listItems.appendChild(newListItem)
                                     }
          }
    else
      {
        let listItem = document.querySelector('#list-item-phone')
        listItem.remove()
        repFlag = false;

        }

}

var repFlag = false;
window.addEventListener("resize", displayPhoneLink)
window.addEventListener("load", displayPhoneLink)









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


