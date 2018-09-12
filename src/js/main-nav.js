
var tabletWidth = 768;

function hideMobileMenuResize() {

    if (window.innerWidth < tabletWidth) {
        var mainNav = document.getElementsByClassName("main-nav");
        if (mainNav.length > 0) {
          mainNav[0].classList.remove("main-nav__opened");
          mainNav[0].classList.add("main-nav__closed");
      }
  } else {
      var mainNav = document.getElementsByClassName("main-nav");
      if (mainNav.length > 0) {
          mainNav[0].classList.remove("main-nav__closed");
          mainNav[0].classList.add("main-nav__opened");
      }
  }
}

function toggleMobileMenu() {
        var mainNav = document.getElementsByClassName("main-nav");
        if (mainNav.length > 0) {
            mainNav[0].classList.toggle("main-nav__opened");
            mainNav[0].classList.toggle("main-nav__closed");
        }
}

function openNavButtonHandler() {
    var elements = document.getElementsByClassName("page-header__open-nav-button");
    if (elements.length > 0) {
        elements[0].addEventListener('click', toggleMobileMenu);
    }
}

function navCloseButtonHandler() {
    var elements = document.getElementsByClassName("main-nav__close-button");
    if (elements.length > 0) {
        elements[0].addEventListener('click', toggleMobileMenu);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    hideMobileMenuResize();
    openNavButtonHandler();
    navCloseButtonHandler();
    window.addEventListener('resize', hideMobileMenuResize);

});
