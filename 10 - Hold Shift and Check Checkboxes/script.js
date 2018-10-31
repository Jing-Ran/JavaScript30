const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesArr = Array.from(checkboxes);
let prevChecked;
let isChecked = false;


function handleCheck1(e) {
  if (e.shiftKey && prevChecked !== this) {
    let point1 = checkboxesArr.indexOf(this);
    let point2 = checkboxesArr.indexOf(prevChecked);
    // console.log('p1 ', point1, point1.checked);

    isChecked = (this.checked || prevChecked.checked) ? true : false;
    console.log(isChecked);

    // Only loop between point1 and point2
    checkboxesArr
      .slice(Math.min(point1, point2), Math.max(point1, point2) + 1)
      .forEach(cb => cb.checked = isChecked);
    
  }

  isChecked = this.checked;
  prevChecked = this;
  console.log(prevChecked, isChecked);
  
}

checkboxes.forEach(cb => cb.addEventListener('click', handleCheck1));