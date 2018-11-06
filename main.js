"use strict";

function openNav() {

    var elResponsiveNav = document.querySelector('.responsive-nav-menu');
    elResponsiveNav.style.display = 'flex';
   

    var elX = document.querySelector('.fa-times-circle');
    elX.style.display = 'block';

}

function closeNav() {
    
    var elResponsiveNav = document.querySelector('.responsive-nav-menu');
    elResponsiveNav.style.display = 'none';

    var elX = document.querySelector('.fa-times-circle');
    elX.style.display = 'none';

}
