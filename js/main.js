
//////////слайдеры/////////

const slider1 = new Swiper ('.bunner-slider__container',{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.bunner-slider__container .swiper-pagination',
        clickable: true,
    },
  
    
    
});



const slider2 = new Swiper ('.newcolect__slider-container',{

   
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.newcolect__slider-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.newcolect__arrow-next',
        prevEl: '.newcolect__arrow-prev',
    },
    
    breakpoints: {
        275: {
        
            slidesPerView: 2,  
             
          },
        375: {
        
          slidesPerView: 2,  
           
        },
        600: {
            
            slidesPerView: 3
        },
        745: {
            
            slidesPerView: 4
        },
        
    },
    
    
});


const slider3 = new Swiper ('.ontrend__slider-container',{

   
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.ontrend__slider-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.ontrend__arrow-next',
        prevEl: '.ontrend__arrow-prev',
    },
    breakpoints: {
        275: {
        
            slidesPerView: 2,  
             
          },
        375: {
        
          slidesPerView: 2,  
           
        },
        600: {
            
            slidesPerView: 3
        },
        745: {
            
            slidesPerView: 4
        },
        
    },
    
    
});


const slider4 = new Swiper ('.home-slider__container',{

    
    spaceBetween: 0,
    loop: true,
    autoplay: false,
   
    navigation: {
        nextEl: '.home-slider__arrow-next',
        prevEl: '.home-slider__arrow-prev',
    },
    pagination: {
        el: '.home-slider__container .swiper-pagination',
        clickable: true,
    },
    
   
    
   
    
    
});




const slider5 = new Swiper ('.suityour__slider-container',{

   
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.suityour__slider-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.suityour__arrow-next',
        prevEl: '.suityour__arrow-prev',
    },
    breakpoints: {
        275: {
        
            slidesPerView: 2,  
             
          },
        375: {
        
          slidesPerView: 2,  
           
        },
        600: {
            
            slidesPerView: 3
        },
        745: {
            
            slidesPerView: 4
        },
        
    },
    
    
    
});

const slider6 = new Swiper ('.intop__slider-container',{

    
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.intop__slider-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.intop__arrow-next',
        prevEl: '.intop__arrow-prev',
    },
    breakpoints: {
        275: {
        
            slidesPerView: 2,  
             
          },
        375: {
        
          slidesPerView: 2,  
           
        },
        600: {
            
            slidesPerView: 3
        },
        745: {
            
            slidesPerView: 4
        },
        
    },
    
    
    
});

//////card-slider////////
const slider7 = new Swiper ('.card__slider',{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    navigation: {
        nextEl: '.card__arrow-next',
        prevEl: '.card__arrow-prev',
    },
    thumbs: {
        swiper: {
            el: '.card-mini__slider' ,
            slidesPerView: 3,
            direction: 'vertical',
            spaceBetween: 20,
        },
        
    },
    
});
const slider8 = new Swiper ('.reviews__slider',{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
   
    navigation: {
        nextEl: '.reviews__arrow-next',
        prevEl: '.reviews__arrow-prev',
    },
    
    
});


const slider9 = new Swiper ('.mightlike__slider-container',{

    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.mightlike__slider-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.mightlike__arrow-next',
        prevEl: '.mightlike__arrow-prev',
    },
    
    
});

const slider10 = new Swiper ('.products-links',{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.products-links .swiper-pagination',
        clickable: true,
    },
  
    
    
});


const slider11 = new Swiper ('.bunner-bottom__slider',{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.bunner-bottom__slider .swiper-pagination',
        clickable: true,
    },
  
    
    
});



/*====================== табы =====================*/
 //////////////table/////////////

let tableTabs = function(){
    
tabBtn = document.querySelectorAll('.table__tabs-btn')
tabItem = document.querySelectorAll('.table__tabs-item')

tabBtn.forEach(onTabClick);

function onTabClick (item){
    item.addEventListener('click', function(){
        let carrentBtn = item
        let tabId = carrentBtn.getAttribute('data-tab')
        let carrentTab = document.querySelector(tabId);

        if( ! carrentBtn.classList.contains('tabs-btn__active')){

            
        tabBtn.forEach(function (item){
            item.classList.remove('tabs-btn__active')
        })

    
        tabItem.forEach(function (item){
                item.classList.remove('tabs__active')
            })
            

        carrentBtn.classList.add('tabs-btn__active')
        carrentTab.classList.add('tabs__active')
        }

    })
}
}

tableTabs()


//////////////account tabs/////////////////
let accTabs = function(){
    
tabBtnAcc = document.querySelectorAll('.account__tabs-btn')
tabItemAcc = document.querySelectorAll('.account__tabs-item')

tabBtnAcc.forEach(onTabClickAcc);

function onTabClickAcc (item){
    item.addEventListener('click', function(){
        let carrentBtn = item
        let tabId = carrentBtn.getAttribute('data-tab')
        let carrentTab = document.querySelector(tabId);

        if( ! carrentBtn.classList.contains('tabs-btn__active-acc')){

            
        tabBtnAcc.forEach(function (item){
            item.classList.remove('tabs-btn__active-acc')
        })

    
        tabItemAcc.forEach(function (item){
                item.classList.remove('tabs__active-acc')
            })
            

        carrentBtn.classList.add('tabs-btn__active-acc')
        carrentTab.classList.add('tabs__active-acc')
        }

    })
}
}

accTabs()

//////////////catalog tabs/////////////////
let catalogTabs = function(){
    
    tabBtnCat = document.querySelectorAll('.account__tabs-btn')
    tabItemCat = document.querySelectorAll('.account__tabs-item')
    
    tabBtnCat.forEach(onTabClickAcc);
    
    function onTabClickAcc (item){
        item.addEventListener('click', function(){
            let carrentBtn = item
            let tabId = carrentBtn.getAttribute('data-tab')
            let carrentTab = document.querySelector(tabId);
    
            if( ! carrentBtn.classList.contains('tabs-btn__active-acc')){
    
                
            tabBtnCat.forEach(function (item){
                item.classList.remove('tabs-btn__active-acc')
            })
    
        
            tabItemCat.forEach(function (item){
                    item.classList.remove('tabs__active-acc')
                })
                
    
            carrentBtn.classList.add('tabs-btn__active-acc')
            carrentTab.classList.add('tabs__active-acc')
            }
    
        })
    }
    }
    
catalogTabs()




/*======================показать еще=====================*/

/////////////account///////////////

let showMoreCards = function(){
    
let elem = document.querySelector('.discount__cards')

if(elem){

    let btn = document.querySelector('.discount-box__btn');

let cards = Array.from(document.querySelectorAll('.discount__cards .product-card'));

window.addEventListener('resize', event =>{
    if(event.target.window.innerWidth > 989) respons1()
    if(event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 679) respons2()
    if(event.target.window.innerWidth <= 679) respons3()
})




function openCatalog (){
    btn.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hide'));
        btn.classList.add('hide');
       
    })
} 

function respons1(){
    if(window.innerWidth > 989 ){
        btn.classList.add('hide');
        cards.forEach((item , index ) => {
            item.classList.add('hide')
            if(index <= 3 ){
                item.classList.remove('hide')
            } else if(index > 3){
                btn.classList.remove('hide')
            }

        })
        openCatalog()
    }
};
respons1();




function respons2(){
    if(window.innerWidth <= 989 && window.innerWidth > 679 ){
        btn.classList.add('hide');
        cards.forEach((item , index ) => {
            item.classList.add('hide')
            if(index <= 2 ){
                item.classList.remove('hide')
            } else if(index > 2){
                btn.classList.remove('hide')
            }

        })
        openCatalog()
    }
};
respons2();


function respons3(){
    if(window.innerWidth <= 679 ){
        btn.classList.add('hide');
        cards.forEach((item , index ) => {
            item.classList.add('hide')
            if(index <= 1 ){
                item.classList.remove('hide')
            } else if(index > 1){
                btn.classList.remove('hide')
            }

        })
        openCatalog()
    }
};
respons3();

}
} 
showMoreCards()


///////////////показать больше текст//////////////

let showMore = function(){

let revBtn = document.querySelectorAll('#toggleButton')

revBtn.forEach(function(btn){
    btn.addEventListener('click', function() {
       
         btn.previousElementSibling.classList.toggle('active')
            if(btn.previousElementSibling.classList.contains('active')){
                btn.textContent = 'показать меньше'
            }else{
                btn.textContent = 'показать больше'
            }
        
       
    });
})
}

showMore()






//////счетчик//////

let counter = function(){
    const counters = document.querySelectorAll('.counter')

if(counters){
    counters.forEach(counter => {
        counter.addEventListener('click' , e=> {
            const target = e.target

            if(target.closest('.counter-btn')){
                let value = parseInt(target.closest('.counter').querySelector('.counter__input').value);
                if(target.classList.contains('counter-btn__plus')){
                    value++;
                } else if (target.classList.contains('counter-btn__minus') && value > 0 ) {
                    --value;
                }
                if (value === 0){
                    target.closest('.counter').querySelector('.counter-btn__minus').classList.add('counter-btn__disable')
                }else{
                    target.closest('.counter').querySelector('.counter-btn__minus').classList.remove('counter-btn__disable')
                }

                target.closest('.counter').querySelector('.counter__input').value = value
            }
        })
    })
}
} 

counter()







///селектор 
///////////////////////

let select = function(){
    
    let selectHeader = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item=>{
        item.addEventListener('click',selectToggle)
    })
    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose )
    })

    function selectToggle(){
        this.parentElement.classList.toggle('select__active')
    }

    function selectChoose (){
        let text = this.innerText
        let select = this.closest('.select')
        let carrentText = select.querySelector('.select__current')
        carrentText.innerText = text
        select.classList.remove('select__active')
    }
}  

select()


/////////////////heartBtn/////////////////
let heart = function(){
    
let heartBtn = document.querySelectorAll('.heart-btn')

heartBtn.forEach(function(item){
    item.onclick = function (){
        item.classList.toggle('heart-btn__active')
    }
})
}

heart()

/*======================аккордеон=====================*/

function filterAccord (){
    document.addEventListener('click', function(e){
        let target = e.target
        if(target.closest('.filter-header__title') ){
           console.log(target)
            target.nextElementSibling.classList.toggle('active')
            target.classList.toggle('cross__active')
        }
    
    })
} 

filterAccord()
   
function footerAccord (){
    document.addEventListener('click', function(e){
        let target = e.target
        if(target.closest('.footer__list-title') ){
           console.log(target)
            target.nextElementSibling.classList.toggle('footer-active')
            target.classList.toggle('footer-cross__active')
        }
    
    })
} 

footerAccord()

/*======================фильтр========================*/


let filterOpen = function(){
    
let filtOpenBtn = document.querySelectorAll('.filter-open__btn')
let filt = document.querySelectorAll('.filter-wrap')


filtOpenBtn.forEach(function(item){
    item.addEventListener('click', function(){
        filt.forEach(function(f){
            f.classList.toggle('active')
            item.classList.toggle('filter-open__btn-active')
        })
        
    })
})
}

filterOpen()


/////////////////////////////


let selectFiltr = function(){
    
    let CatSelectHeader = document.querySelectorAll('.catalog-select__carrent')
    let CatSelectItem = document.querySelectorAll('.catalog-select__item')

    CatSelectHeader.forEach(item=>{
        item.addEventListener('click',selectToggle)
    })
    CatSelectItem.forEach(item=>{
        item.addEventListener('click', selectChoose )
    })

    function selectToggle(){
        this.parentElement.classList.toggle('catalog-select__active')
    }

    function selectChoose (){
        let text = this.innerText
        let select = this.closest('.catalog-select__wrap')
        let carrentText = select.querySelector('.catalog-select__carrent')
        carrentText.innerText = text
        select.classList.remove('catalog-select__active')
    }
}  

selectFiltr()

///////////////////////

let showPassword = function(){

    let btnEye = document.querySelectorAll('.form-btn__eye')

    btnEye.forEach(function(btn){
        btn.addEventListener('click' , function(){
        
            let pass = btn.previousElementSibling

                if(pass.type == 'text'){
                    pass.type = 'password';
                    
                }else if(pass.type == 'password'){
                    pass.type = 'text';
                    
                }

                if(pass.type == 'text'){
                    btn.classList.add('btn__eye-active')
                }else{
                    btn.classList.remove('btn__eye-active')
                }
                
            
        })
    })
}

showPassword()




let filtSize = function(){
    let filtSizeItem = document.querySelectorAll('.filter-size__item')

        filtSizeItem.forEach(function(item){
            
            item.addEventListener('click',function(){
                
                if(! item.classList.contains('filter-size__item-active')){
                    filtSizeItem.forEach(function (item){
                        item.classList.remove('filter-size__item-active')

                    })
                        item.classList.add('filter-size__item-active')
                }
                 
                
             })


        })
        
}

filtSize()



let showSearch = function(){
    let searchBtn = document.querySelectorAll('.search-btn');
    let search = document.querySelectorAll('.search-box');
    let logo = document.querySelectorAll('.logo');

        searchBtn.forEach(function(item){
            item.addEventListener('click' , function(){
                item.previousElementSibling.classList.remove('hide')
                item.classList.add('hide')
                logo.forEach(function(item){
                    item.classList.add('hide')
                })
                
            })
        })
        // search.forEach(function(item){
        //     document.addEventListener('click',function(e){
        //         if(! item.classList.contains('hide')){
              
        //             let notSearchClick = e.composedPath().includes(item)
        //                if(!notSearchClick){
        //                 searchBtn.forEach(function(item){
                            
        //                     item.nextElementSibling.classList.add('hide')
        //                     item.classList.remove('hide') 
        //                         logo.forEach(function(item){
        //                             item.classList.remove('hide')
        //                         })
                                
                        
        //                 })
        //                }
        //         }
        //     })
        // })
       
        

}
showSearch()




/*====================popup==================*/


let toggleForms = function(){

let registBtn = document.querySelectorAll('.regist-btn')
let exitBtn = document.querySelectorAll('.exit-btn')
let exitForma = document.querySelectorAll('.popup-forma__exit-wrap')
let registForma = document.querySelectorAll('.popup-forma__regist-wrap')

registBtn.forEach(function(item){
    item.addEventListener('click', function(){
        exitForma.forEach(function(item){
            if(! item.classList.contains('hide')){
                item.classList.add('hide')
            }
            })
        registForma.forEach(function(item){
            if(item.classList.contains('hide')){
                item.classList.remove('hide')
            }
            })
    })
})
exitBtn.forEach(function(item){
    item.addEventListener('click', function(){
        registForma.forEach(function(item){
            if(! item.classList.contains('hide')){
                item.classList.add('hide')
            }
            })
        exitForma.forEach(function(item){
            if(item.classList.contains('hide')){
                item.classList.remove('hide')
            }
            })
    })
})

}

toggleForms()


let showPopup = function(){
    let accountBtn = document.querySelectorAll('.account')
    let popup = document.querySelectorAll('.popup')
    let crossPopup = document.querySelectorAll('.popup__cross')
        accountBtn.forEach(function(item){
            item.addEventListener('click', function(){
                popup.forEach(function(item){
                    item.classList.add('active')
                 })
            })
        })
        crossPopup.forEach(function(item){
            item.addEventListener('click', function(){
                popup.forEach(function(item){
                    item.classList.remove('active')
                 })
            })
        })
}
showPopup()


let showDisPopup = function(){
    let discountBtn = document.querySelectorAll('.discount-btn')
    let popup = document.querySelectorAll('.discount-popup')
    let crossPopup = document.querySelectorAll('.discount-popup__cross')
    discountBtn.forEach(function(item){
            item.addEventListener('click', function(){
                popup.forEach(function(item){
                    item.classList.add('active')
                 })
            })
        })
        crossPopup.forEach(function(item){
            item.addEventListener('click', function(){
                popup.forEach(function(item){
                    item.classList.remove('active')
                 })
            })
        })
}
showDisPopup()


/*====================burger======================*/


function burgerAccord (){
    document.addEventListener('click', function(e){
        let target = e.target
        if(target.closest('.burger-menu__title') ){
           
            target.nextElementSibling.classList.toggle('burger-menu__list-active')
        }
    
    })
} 

burgerAccord()

let burgerBtnClick = function(){
    let burgerBtn = document.querySelectorAll('.burger-btn')
    let burgerMenu = document.querySelectorAll('.burger-menu')
    let burgerCross = document.querySelectorAll('.burger-menu__cross')

    burgerBtn.forEach(function(btn){
        btn.addEventListener('click',function(){
            burgerMenu.forEach(function(menu){
                menu.classList.add('active')
            })
            
        })
    })
    burgerCross.forEach(function(btn){
        btn.addEventListener('click',function(){

            burgerMenu.forEach(function(menu){

                menu.classList.remove('active')
            
            })
            
        })
    })

}
burgerBtnClick()

// let burgerMenu = document.querySelectorAll('.burger-menu')

//     burgerMenu.forEach(function(menu){
//         document.addEventListener('click',function(e){
            
//             if(menu.classList.contains('active')){
//                 let notBurgerClick = e.composedPath().includes(menu)
//                 console.log(notBurgerClick)
//                 if(notBurgerClick == false){
//                     menu.classList.remove('active')
//                 }
//             }
            
//             })
            
//     })


    

    

   
    
