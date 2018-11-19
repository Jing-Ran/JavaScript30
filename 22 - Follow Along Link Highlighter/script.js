const triggers = document.querySelectorAll('a');
const highlight = document.body.appendChild(document.createElement('span'));

highlight.classList.add('highlight');

function moveHighlight() {
  const linkPos = this.getBoundingClientRect();
  // highlight.style.left = `${linkPos.x}px`;
  // highlight.style.top = `${linkPos.y}px`;
  // in this case, linkPo.x = linkPos.left
  // if only translate(x, y), when the page is scrolled,
  // the translated position is incorrect
  highlight.style.transform = 
    `translate(${linkPos.x + window.scrollX}px, 
    ${linkPos.y + window.scrollY}px`;
  highlight.style.width = `${linkPos.width}px`;
  highlight.style.height = `${linkPos.height}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', moveHighlight));



