const nav = document.querySelector('#main');
const logo = document.querySelector('.logo');
const siteWrap = document.querySelector('.site-wrap');
let topOfNav = nav.offsetTop;

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // When fixed-nav class is added, the nav is positioned fixed
    // and the nav's original space is take off from the page
    // so the site-wrap moves up
    // To avoid moving up, add some padding to body
    // The padding is equal to the nav's height
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', debounce(fixNav));
// window.addEventListener('resize', () => {
//   topOfNav = nav.offsetTop;
// });


