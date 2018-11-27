const slider = document.querySelector('.items');
let isDown = false;
let startX;
let sliderScrollLeft;

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

function slide(e) {
  // stop selecting text...
  e.preventDefault();

  let currentX = e.pageX - slider.offsetLeft;
  // Add sliderScrollLeft, so the scoll start from current slider position
  // doesn't start from the very beginning
  slider.scrollLeft = startX - currentX + sliderScrollLeft;
  // console.log(e.target.pageX);
}

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  // where is the e inside of the slider, not relative to the page
  // should minus the left margin of the slider
  startX = e.pageX - slider.offsetLeft;
  sliderScrollLeft = slider.scrollLeft;
  console.log(sliderScrollLeft);
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  // activateSlider();
  slider.classList.remove('active');
  // slide(e);
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  // deactivateSlider();
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  isDown && debounce(slide(e));
});