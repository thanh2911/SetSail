
// Phan Modal User -----------------------------
modalUser = document.querySelector('.modal-user') ;
user = document.querySelector('.right-user i');
boxUser = document.querySelector('.box-user');

btnLogin = document.querySelector(".register-header--login");
btnRegister = document.querySelector(".login-header--register");
boxLogin = document.querySelector(".login");
boxRegister = document.querySelector(".register");


user.onclick = () => {
    modalUser.classList.add('modal-open')
}

modalUser.onclick = () => {
    modalUser.classList.remove('modal-open');
}

boxUser.addEventListener('click' , function(e) {
    e.stopPropagation();
})


btnLogin.onclick = () => {
    boxLogin.classList.add('open');
    boxRegister.classList.remove('open');
}

btnRegister.onclick = () => {
    boxLogin.classList.remove('open');
    boxRegister.classList.add('open');
}



// End Modal User -------------------

//  Modal Search -------------------

modalSearch = document.querySelector('.modal-search');
btnSearch = document.querySelector('.right-search i');
boxSearch = document.querySelector('.box-search');
btnClose = document.querySelector('.modal-search--close')




btnSearch.onclick = () => {
    modalSearch.classList.add("modal-open");
} 

modalSearch.onclick = () => {
    modalSearch.classList.remove('modal-open');
}

btnClose.onclick = () => {
    modalSearch.classList.remove('modal-open');
}


boxSearch.addEventListener('click' , function(e) {
    e.stopPropagation();
})

// ------End Model Search -----------


// ------Phan mobie-table --------------//

const barsMT = document.querySelector('.mt-bars');
const userMt = document.querySelector('.mt-user');
const boxNav = document.querySelector('.nav-list');

userMt.onclick = () => {
  modalUser.classList.add('modal-open')
}

barsMT.onclick = () => {
  boxNav.classList.toggle("open")
}




// ====================End Header=================//



// -------------- Slider ------------------------ 

btnPrev = document.querySelector('.prev-slider');
btnNext = document.querySelector('.next-slider');
sliderItems = document.querySelectorAll('.slider-item');
lengthSlider = sliderItems.length;
let index = 0;


btnNext.onclick = () => {
    handleSilder(1);
}

btnPrev.onclick = () => {
    handleSilder(-1);
}

const handleSilder = (n) => {

    if(n===1) {
        index++;
        if(index >= lengthSlider) {
            index = 0 ;
        }

        slider_add_remove(index);
    }

    else {
        index--;
        if(index <= 0) {
            index = lengthSlider-1 ;
        }

        slider_add_remove(index);
    }
}

const slider_add_remove =function(index) {
    sliderItems.forEach((item,i) => {
        if(i===index){
            item.classList.add('open')     
        }
        else
        item.classList.remove('open')
    })
 }

 const autoSilder = () => {
     setInterval(() => {
            handleSilder(-1);
        
     }, 6000);
 }
 autoSilder();

// --------------End Slider ------------------------ 


$('.tour-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    appendArrows : false,
    speed :500 ,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });



  $('.top-reviews--comments').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows : false,
    speed :500 ,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });


  $('.achievements-user').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows : false,
    speed :500 ,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  
//   Counter Up

window.onscroll = () => {

    const a = this.scrollY ;

    const counters = document.querySelectorAll(".counter");
    
        counters.forEach((counter) => {
            counter.innerText = "0";
        
            const updateCouter = () => {
                const target = counter.getAttribute('data-target');
        
                const c = +counter.innerText ;
                

                const i = target/200;

                if(c < target) {
                    counter.innerText= `${Math.ceil(c+i)}`
        
                setTimeout(updateCouter,10);
        
                }
        
            }   
            if(a >= 3400 && a <= 4000) {
                updateCouter();
            }

        })
    
    



}

