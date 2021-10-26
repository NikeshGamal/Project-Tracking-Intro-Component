const hamburgerMenu= document.querySelector('.hamMenu');
const closeMenu= document.querySelector('.hamClose');
const mainCon = document.querySelector('.main_container');
const mobNav = document.querySelector('.mob_nav');

hamburgerMenu.addEventListener('click',(e)=>{
     mainCon.style.filter="blur(2px)";
     mobNav.style.display="block";
     closeMenu.style.display="block";
});

closeMenu.addEventListener('click',(e)=>{
    mainCon.style.filter="blur(0px)";
    mobNav.style.display="none";
    closeMenu.style.display="none";
});