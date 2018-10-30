const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let prevChecked;

function handleCheck(e) {
  let inBetween = false;
  
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(cb => {
      if (cb === prevChecked || cb === this) {
        inBetween = !inBetween;
      }

      if (inBetween) cb.checked = true;
    });
  }
  
  prevChecked = this;
  
}

checkboxes.forEach(cb => cb.addEventListener('click', handleCheck));