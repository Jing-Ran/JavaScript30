const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
// let isHover = false;

function changeSpeed(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const [max, min] = [4, 0.4];
  const playbackRate = (percent * (max - min) + min).toFixed(2);
  console.log(playbackRate);
  speedBar.style.height = `${Math.round(percent * 100)}%`;
  speedBar.textContent = `${playbackRate} ×`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', changeSpeed);