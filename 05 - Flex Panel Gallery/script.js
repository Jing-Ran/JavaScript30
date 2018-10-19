const panels = document.querySelectorAll('.panel');
// console.log('hello');

// close opened panel before open a new one
function closeAll() {
  panels.forEach(panel => {
    panel.classList.remove('open');
  });
}

function toggleOpen() {
  if (!this.classList.contains('open')) closeAll();

  this.classList.toggle('open');
}

function toggleActive(e) {
  // in safari is flex, in chrome and ff is flex-grow
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));