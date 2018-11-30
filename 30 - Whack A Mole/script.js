const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('button');
let timeUp = true;
let lastHole;
let score = 0;

// This game will be 10 seconds long
// Random mole, random hole
// Each mole keeps up at least 200ms (b/t 200ms and 1s)


function randomTime(min, max) {
  // Get a random number b/t min and max
  // If without Math.round: the results will not include the max
  return Math.round(Math.random() * (max - min) + min);
} 

// function randomHole(holes) {
//   return Math.floor(Math.random() * holes.length) + 1;
// }

// Wes's method: find the node and use index instead of the num in class name
function randomHole(holes) {
  const randomI = Math.floor(Math.random() * holes.length);
  const hole = holes[randomI];

  if (hole === lastHole) return randomHole(holes);

  // Game rule: no repeated hole in a row
  lastHole = hole;

  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');

    // run peep fn again once the up class is removed
    // When timeUp is false, run peep again
    if (!timeUp) peep();
  }, time);
}

function hitOrMiss(e) {
  if (!e.isTrusted) return; // if the click is created by script

  score++;
  // When the mole is hit, remove its up class even there is time left
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

function startGame() {
  console.log('start');
  // Reset scoreboard and score
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  peep();

  setTimeout(() => timeUp = true, 10000);
}

startBtn.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', hitOrMiss));


