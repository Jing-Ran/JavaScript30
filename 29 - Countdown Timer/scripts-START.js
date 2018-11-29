let countdown;
const timeLeftDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time]');
// const form = document.querySelector('#custom');

function timer(sec) {
  // put clearInterval here, so don't need to call it with every input/click
  clearInterval(countdown);

  const start = Date.now();
  console.log(start);
  const end = start + sec * 1000;

  displayEndTime(end);

  // setInterval doesn't start immediatly, it runs 1sec later
  // So to start countdown from the beginning, call displaySecLeft once here
  displaySecLeft(sec);

  countdown = setInterval(() => {
    const secLeft = Math.round((end - Date.now()) / 1000);

    if (secLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displaySecLeft(secLeft);
  }, 1000);
}

function displaySecLeft(sec) {
  let timeStr = '';
  let h = Math.floor(sec / 3600);
  let secLeft = sec % 3600;
  let m = Math.floor(secLeft / 60);
  secLeft = secLeft % 60;

  timeStr = 
  `${h > 0 ? h + ':' : ''}${m < 10 ? '0' : ''}${m}:${secLeft < 10 ? '0' : ''}${secLeft}`;
  
  timeLeftDisplay.textContent = timeStr;
  // Update tab title
  document.title = timeStr;
}

function displayEndTime(timestamp) {
  const endTime = new Date(timestamp);
  const h = endTime.getHours();
  const m = endTime.getMinutes();

  // 24h display
  endTimeDisplay.textContent = 
    `Be Back At ${h}:${m < 10 ? '0' : ''}${m}`;

  // 12h display
  // const adjustedH = h > 12 ? h - 12 : h;

  // endTimeDisplay.textContent = 
  //     `Be Back At ${adjustedH}:${m < 10 ? '0' : ''}${m}`;
}

function startCustomTimer(e) {
  e.preventDefault();
  const inputMins = this.minutes.value;

  // To prevent letter inputs
  if (isNaN(inputMins)) return;

  timer(inputMins * 60);

  // reset form
  this.reset();
}

// set time btns
btns.forEach(btn => btn.addEventListener('click', () => {
  const secs = parseInt(btn.dataset.time);
  timer(secs);
}));

// Get element by the name attribute
document.customForm.addEventListener('submit', startCustomTimer);

