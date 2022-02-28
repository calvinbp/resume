/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var counterContainer = document.querySelector(".website-counter");
//localStorage.setItem("pageCount", 0);
var visitCount = localStorage.getItem("pageCount");
//alert(localStorage.getItem("pageCount"));
// Check if pageCount entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("pageCount", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("pageCount", 1);
}
counterContainer.innerHTML = visitCount;
;


// Adding onClick event listener
//resetButton.addEventListener("click", () => {
//  visitCount = 1;
//  localStorage.setItem("pageCount", 1);
//  counterContainer.innerHTML = visitCount;
// });
