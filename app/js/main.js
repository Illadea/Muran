////////// Hide Navbar on Scroll Down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-175px";
  }
  prevScrollpos = currentScrollPos;
}


/* NAVIGATION, BURGER MENU */
$(document).ready(function() {
  $('.menu__hamburger-btn').click(function() {
      $('.menu__hamburger-btn').toggleClass('open-menu');
  });
});