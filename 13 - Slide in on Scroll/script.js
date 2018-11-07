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

const imgs = document.querySelectorAll('.slide-in');

function checkSlide() {
  imgs.forEach(img => {
    // When half of the img is scrolled into view point
    // window.scrollY + window.innerHeight - where you currently scrolled at the btm
    // Half way thru the img - we don't want to scroll down to the img btm
    const slideInAt = window.scrollY + window.innerHeight;
    // Bottom of the img - fixed value
    const imgBtm = img.offsetTop + img.height;
    console.log(slideInAt, img.offsetTop);
    
    // If the img is half shown:  
    // half shown: w.scrollY + w.innerH = img.offsetTop + img.h / 2
    const isHalfShown = slideInAt > img.offsetTop;
    // If is not scrolled past the whole img: scroll right to the btm of the img
    // window.scrollY < imgBtm
    const isNotPast = window.scrollY < imgBtm;

    if (isHalfShown && isNotPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));