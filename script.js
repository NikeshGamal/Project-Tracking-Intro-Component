const hamburgerMenu= document.querySelector('.hamMenu');
const closeMenu= document.querySelector('.hamClose');
const mainCon = document.querySelector('.main_container');
const mobNav = document.querySelector('.mob_nav');

hamburgerMenu.addEventListener('click',(e)=>{
     mainCon.style.filter="blur(2px)";
     closeMenu.style.display="block";
     mobNav.style.left="49.8%";
});

closeMenu.addEventListener('click',(e)=>{
    mainCon.style.filter="blur(0px)";
    // closeMenu.style.display="none";
    mobNav.style.left="100%";
});