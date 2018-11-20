const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // Stop bubbling up
  // e.stopPropagation();
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  // the logText fn doesn't run on bubble up,
  // it runs on capture down
  // capture: true
}));

btn.addEventListener('click', () => {
  console.log('click');
}, {
  once: true
});

