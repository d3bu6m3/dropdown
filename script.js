const s             = document.querySelector('.navbar-s');
const sMenu         = document.querySelector('.s-menu');
const menuclose     = document.querySelector('.menu-close');
const fadeout       = document.querySelectorAll('.fade-out');
const overlay       = document.querySelector('.overlay');
const menuLink      = document.querySelector('#dropdown1');
const menuLink2     = document.querySelector('#dropdown2');
const menuDrop1     = document.querySelector('#menu-dropdown-features');
const menuDrop2     = document.querySelector('#menu-dropdown-company');

s.addEventListener('click', function(){
    if (sMenu.classList.contains('fade-out')) {
        fadeout.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
    
});

menuclose.addEventListener('click', function(){
    if (sMenu.classList.contains('fade-in')) {
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        sMenu.classList.remove('fade-in');
        sMenu.classList.add('fade-out');
    }
});

menuLink.addEventListener('click', function(){
    if (menuDrop1.classList.contains('hide')) {
        menuDrop1.classList.remove('hide');
        menuDrop1.classList.add('show');
    } else {
        menuDrop1.classList.remove('show');
        menuDrop1.classList.add('hide');
    }
});

menuLink2.addEventListener('click', function(){
    if (menuDrop2.classList.contains('hide')) {
        menuDrop2.classList.remove('hide');
        menuDrop2.classList.add('show');
    } else {
        menuDrop2.classList.remove('show');
        menuDrop2.classList.add('hide');
    }
});

