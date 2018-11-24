const dropdownBg = document.querySelector('.dropdownBackground');
// li elements will be the triggers, 
// because we still need to be able to select dropdowns
const navItems = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');

function showDropdown() {
  this.classList.add('trigger-enter');
  // Add trigger-enter-active class 150ms later
  // "this" in an arrow fn, inherites from parent fn (showDropdown)
  // setTimeout(() => {
  //   if (this.classList.contains('trigger-enter')) {
  //     this.classList.add('trigger-enter-active');
  //   }
  // }, 150);
  setTimeout(() => this.classList.contains('trigger-enter') && 
    this.classList.add('trigger-enter-active'), 150);
  dropdownBg.classList.add('open');
  const dropdown = this.querySelector('.dropdown');
  const dropdownRect = dropdown.getBoundingClientRect();
  // All rect info of dropdownRect, are where the dropdown absolutely
  // on the page, if there is a title on the top,
  // the info doesn't take the title's position
  // so we also need to get the nav's position.
  const navRext = nav.getBoundingClientRect();
  const coords = {
    height: dropdownRect.height,
    width: dropdownRect.width,
    x: dropdownRect.x + window.scrollX - navRext.x,
    y: dropdownRect.y + window.scrollY- navRext.y
  };
  dropdownBg.style.transform = `translate(${coords.x}px, 
    ${coords.y}px`;

  
  dropdownBg.style.width = `${coords.width}px`;
  dropdownBg.style.height = `${coords.height}px`;

  
}

function hideDropdown() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBg.classList.remove('open');

}

navItems.forEach(item => item.addEventListener('mouseenter', showDropdown));
navItems.forEach(item => item.addEventListener('mouseleave', hideDropdown));