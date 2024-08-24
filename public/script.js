document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// JavaScript to make the header sticky after scrolling
window.onscroll = function() {stickyHeader()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

