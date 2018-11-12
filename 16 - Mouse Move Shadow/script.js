const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px - how many pixels should be stretched

function moveShadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  // Where the current cursor at
  let { offsetX: x, offsetY: y } = e;

  if (e.target !== hero) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  // if walk is 100, the max we go -50 (to the left/top) and 50 to the right/btm
  const xwalk = (x / width * walk) - (walk / 2);
  const ywalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `
    ${xwalk}px ${ywalk}px 0 rgba(0,0,0,0.5),
    ${xwalk * -1.5}px ${ywalk * -2}px 0 rgba(0,0,0,0.2),
    ${ywalk * -2}px ${xwalk * -2}px 0 rgba(0,0,0,0.7),
    ${ywalk * 3}px ${xwalk * 2}px 0 red
  `;
}


hero.addEventListener('mousemove', moveShadow);