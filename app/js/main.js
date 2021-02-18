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
  $('.header__hamburger-btn').click(function() {
      $('.header__hamburger-btn').toggleClass('open-menu');
      $('.menu__list').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});


// else {
//   if( screen.width < 1100) {
//     document.getElementById("header").style.top = "-1px";
//   } else {
//     document.getElementById("header").style.top = "-175px";
//   }
// }