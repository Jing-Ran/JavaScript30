const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const totalInSeconds = timeNodes
  .map(node => node.dataset.time)
  .map(time => {
    // ES6 - destructuring array
    // split time into min and sec
    const [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((acc, cur) => acc + cur);

let secLeft = totalInSeconds;
const h = Math.floor(secLeft / 3600);
secLeft = secLeft % 3600;

const m = Math.floor(secLeft / 60);
secLeft = secLeft % 60;

console.log(`${h}:${m}:${secLeft}`);
