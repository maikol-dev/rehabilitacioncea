// // navbar toggling
// const navbarShowBtn = document.querySelector('.navbar-show-btn');
// const navbarCollapseDiv = document.querySelector('.navbar-collapse');
// const navbarHideBtn = document.querySelector('.navbar-hide-btn');

// navbarShowBtn.addEventListener('click', function(){
//     navbarCollapseDiv.classList.add('navbar-show');
// });
// navbarHideBtn.addEventListener('click', function(){
//     navbarCollapseDiv.classList.remove('navbar-show');
// });

/*==================== MENU SHOW Y HIDDEN ====================*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// // changing search icon image on window resize
// window.addEventListener('resize', changeSearchIcon);
// function changeSearchIcon(){
//     let winSize = window.matchMedia("(min-width: 1200px)");
//     if(winSize.matches){
//         document.querySelector('.search-icon img').src = "images/search-icon.png";
//     } else {
//         document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
//     }
// }
// changeSearchIcon();

// // stopping all animation and transition
// let resizeTimer;
// window.addEventListener('resize', () =>{
//     document.body.classList.add('resize-animation-stopper');
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         document.body.classList.remove('resize-animation-stopper');
//     }, 400);
// });

