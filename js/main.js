const navBurger = document.getElementById('nav__burger');
const navClose = document.getElementById('nav__close');
const navCollection = document.getElementById('nav__collection');

let if_nav_open = false;

navBurger.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0px)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
});

navClose.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0px)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
});


// nav option

const navSelectP = document.getElementById('nav__select__p');
const navOptions = document.getElementById('nav__options');

const optLocations = document.getElementById('opt__locations');
const optCars = document.getElementById('opt__cars');
const optTravlers = document.getElementById('opt__travlers');

let nav_opt_open = false;

navSelectP.addEventListener('click' , () =>{
    if (!nav_opt_open) {
        navOptions.style.display='flex';
        nav_opt_open = true;
    } else{
        navOptions.style.display='';
        nav_opt_open = false;
    }
})

optTravlers.addEventListener('click' , () =>{
    navSelectP.innerText=optTravlers.innerText
})
optCars.addEventListener('click' , () =>{
    navSelectP.innerText=optCars.innerText
})
optLocations.addEventListener('click' , () =>{
    navSelectP.innerText=optLocations.innerText
})

// Hero

const heroStays = document.getElementById('hero__stays');
const heroFlights = document.getElementById('hero__flights');
const heroCars = document.getElementById('hero__cars');
const heroThings = document.getElementById('hero__things');

const heroStaysBody = document.getElementById('hero__stays__body');
const heroFlightsBody = document.getElementById('hero__flights__body');
const heroCarsBody = document.getElementById('hero__cars__body');
const heroThingsBody = document.getElementById('hero__things__body');

function heroStaysSelect() {
    heroStays.classList.add('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.remove('hero__selected');

    heroStaysBody.style.display='block'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='none'
};

function heroFlightsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.add('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.remove('hero__selected');

    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='block'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='none'
};

function heroCarsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.add('hero__selected');
    heroThings.classList.remove('hero__selected');
    
    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='block'
    heroThingsBody.style.display='none'
};

function heroThingsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.add('hero__selected');
    
    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='block'
};

heroStays.addEventListener('click' , () => heroStaysSelect());
heroFlights.addEventListener('click' , () => heroFlightsSelect());
heroCars.addEventListener('click' , () => heroCarsSelect());
heroThings.addEventListener('click' , () => heroThingsSelect());


// destinitation

let destinationsLeft1 = document.getElementById('destinations__left1');
let destinationsRight1 = document.getElementById('destinations__right1');

let destinationsLeft2 = document.getElementById('destinations__left2');
let destinationsRight2 = document.getElementById('destinations__right2');

let destinationsWrapper = document.querySelector('.destinations__wrapper');

destinationsRight1.addEventListener('click', () =>{
    let scrollAmount = destinationsWrapper.clientWidth * 0.4;

    destinationsWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

destinationsLeft1.addEventListener('click', () =>{
    let scrollAmount = destinationsWrapper.clientWidth * 0.4;

    destinationsWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

destinationsRight2.addEventListener('click', () =>{
    let scrollAmount = destinationsWrapper.clientWidth * 0.4;

    destinationsWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

destinationsLeft2.addEventListener('click', () =>{
    let scrollAmount = destinationsWrapper.clientWidth * 0.4;

    destinationsWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});


// accordion

let accordionBtn1 = document.getElementById('accordion__btn1');
let accordionBtn2 = document.getElementById('accordion__btn2');
let accordionBtn3 = document.getElementById('accordion__btn3');
let accordionBtn4 = document.getElementById('accordion__btn4');
let accordionBtn5 = document.getElementById('accordion__btn5');

let accordion1 = document.getElementById('accordion__1');
let accordion2 = document.getElementById('accordion__2');
let accordion3 = document.getElementById('accordion__3');
let accordion4 = document.getElementById('accordion__4');
let accordion5 = document.getElementById('accordion__5');

let accordionHead1 = document.getElementById('accordion__head__1')
let accordionHead2 = document.getElementById('accordion__head__2')
let accordionHead3 = document.getElementById('accordion__head__3')
let accordionHead4 = document.getElementById('accordion__head__4')
let accordionHead5 = document.getElementById('accordion__head__5')

let ifAccordionOpen1 = false;
let ifAccordionOpen2 = false;
let ifAccordionOpen3 = false;
let ifAccordionOpen4 = false;
let ifAccordionOpen5 = false;

accordionHead1.addEventListener('click' , () =>{
    if (!ifAccordionOpen1) {
        accordion1.style.height='200px'
        accordionBtn1.style.transform='rotateZ(180deg)'
        ifAccordionOpen1 = true;

        accordion2.style.height=''
        accordionBtn2.style.transform=''
        ifAccordionOpen2 = false;

        accordion3.style.height=''
        accordionBtn3.style.transform=''
        ifAccordionOpen3 = false;

        accordion4.style.height=''
        accordionBtn4.style.transform=''
        ifAccordionOpen4 = false;

        accordion5.style.height=''
        accordionBtn5.style.transform=''
        ifAccordionOpen5 = false;
    } else{
        accordion1.style.height=''
        accordionBtn1.style.transform=''
        ifAccordionOpen1 = false;
    }
});

accordionHead2.addEventListener('click' , () =>{
    if (!ifAccordionOpen2) {
        accordion2.style.height='200px'
        accordionBtn2.style.transform='rotateZ(180deg)'
        ifAccordionOpen2 = true;
        
        accordion1.style.height=''
        accordionBtn1.style.transform=''
        ifAccordionOpen1 = false;

        accordion3.style.height=''
        accordionBtn3.style.transform=''
        ifAccordionOpen3 = false;

        accordion4.style.height=''
        accordionBtn4.style.transform=''
        ifAccordionOpen4 = false;

        accordion5.style.height=''
        accordionBtn5.style.transform=''
        ifAccordionOpen5 = false;
    } else{
        accordion2.style.height=''
        accordionBtn2.style.transform=''
        ifAccordionOpen2 = false;
    }
});

accordionHead3.addEventListener('click' , () =>{
    if (!ifAccordionOpen3) {
        accordion3.style.height='200px'
        accordionBtn3.style.transform='rotateZ(180deg)'
        ifAccordionOpen3 = true;
        
        accordion2.style.height=''
        accordionBtn2.style.transform=''
        ifAccordionOpen2 = false;

        accordion1.style.height=''
        accordionBtn1.style.transform=''
        ifAccordionOpen1 = false;

        accordion4.style.height=''
        accordionBtn4.style.transform=''
        ifAccordionOpen4 = false;

        accordion5.style.height=''
        accordionBtn5.style.transform=''
        ifAccordionOpen5 = false;
    } else{
        accordion3.style.height=''
        accordionBtn3.style.transform=''
        ifAccordionOpen3 = false;
    }
});

accordionHead4.addEventListener('click' , () =>{
    if (!ifAccordionOpen4) {
        accordion4.style.height='200px'
        accordionBtn4.style.transform='rotateZ(180deg)'
        ifAccordionOpen4 = true;
        
        accordion2.style.height=''
        accordionBtn2.style.transform=''
        ifAccordionOpen2 = false;

        accordion3.style.height=''
        accordionBtn3.style.transform=''
        ifAccordionOpen3 = false;

        accordion1.style.height=''
        accordionBtn1.style.transform=''
        ifAccordionOpen1 = false;

        accordion5.style.height=''
        accordionBtn5.style.transform=''
        ifAccordionOpen5 = false;
    } else{
        accordion4.style.height=''
        accordionBtn4.style.transform=''
        ifAccordionOpen4 = false;
    }
});

accordionHead5.addEventListener('click' , () =>{
    if (!ifAccordionOpen5) {
        accordion5.style.height='200px'
        accordionBtn5.style.transform='rotateZ(180deg)'
        ifAccordionOpen5 = true;
        
        accordion2.style.height=''
        accordionBtn2.style.transform=''
        ifAccordionOpen2 = false;

        accordion3.style.height=''
        accordionBtn3.style.transform=''
        ifAccordionOpen3 = false;

        accordion4.style.height=''
        accordionBtn4.style.transform=''
        ifAccordionOpen4 = false;

        accordion1.style.height=''
        accordionBtn1.style.transform=''
        ifAccordionOpen1 = false;
    } else{
        accordion5.style.height=''
        accordionBtn5.style.transform=''
        ifAccordionOpen5 = false;
    }
});







// location

let locationsLeft = document.getElementById('locations__left');
let locationsRight = document.getElementById('locations__right');
let locationsWrapper = document.querySelector('.locations__wrapper');

locationsRight.addEventListener('click', () =>{
    let scrollAmount = locationsWrapper.clientWidth * 0.4;

    locationsWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

locationsLeft.addEventListener('click', () =>{
    let scrollAmount = locationsWrapper.clientWidth * 0.4;

    locationsWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});




// preloader

const preloader = document.getElementById('preloader');

preloader.style.transition='.5s'

window.addEventListener('load' , () =>{
    preloader.style.opacity='0'

    setTimeout(() => {
        preloader.remove()    
    }, 500);
})
