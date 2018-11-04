const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playBtn = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const rangeSliders = player.querySelectorAll('.player__slider');


const volumeBtn = player.querySelector('input[name="volume"]');
const playRateBtn = player.querySelector('input[name="playbackRate"]');

/************
  Functions 
************/

// Play/pause video
function togglePlay() {
  // when video is paused => play it
  // When video is playing => pause it
  video.paused ? video.play() : video.pause();
}

// Control playBtn text content in a new fn
// Because other reasons may cause the video plays/pauses
// and need to change the text content
function changePlayBtn() {
  this.paused ? playBtn.textContent = '►' : playBtn.textContent = '❚ ❚';
}

// Change volume or playbackRate
function changeVolumeOrRate() {;
  const attr = this.name;
  video[attr] = this.value;
}

// Skip x seconds
function skip() {
  const skipTime = parseInt(this.dataset.skip);
  video.currentTime += skipTime;
}

// Change progress bar
function handleProgress() {
  // console.log(this.style.flexBasis);
  const percent = `${(video.currentTime / video.duration) * 100}%`;
  progressBar.style.flexBasis = percent;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // Update currentTime => trigger timeupdate event
  video.currentTime = scrubTime;
  // console.log(scrubTime);
}



/*******************
  Event listeners 
*******************/

playBtn.addEventListener('click', togglePlay);
// Click on the video also triggers togglePlay fn
video.addEventListener('click', togglePlay); 

// Change text content of playBtn when play/pause
// Don't do it in the togglePlay fn because many other reasons may cause 
// the vedio play/pause
video.addEventListener('play', changePlayBtn);
video.addEventListener('pause', changePlayBtn);

rangeSliders.forEach(slider => slider.addEventListener('input', changeVolumeOrRate));

skipBtns.forEach(btn => btn.addEventListener('click', skip));

// timeupdate fires when the currentTime attribute has been updated
video.addEventListener('timeupdate', handleProgress);

// Create a flag variable 
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);






// console.log(video.mediaGroup);