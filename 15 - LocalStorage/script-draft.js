const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  console.log('additem');
  const isFirstItem = (items.length === 0);
  const itemToAdd = this.querySelector('input[name="item"]').value;
  const itemIndex = items.length;

  items.push(
    { 
      [itemIndex]: itemToAdd,
      checked: false
    }
  );
  
  let itemTemplate = `
    <li>
      <input type="checkbox" data-index="${itemIndex}" id="item${itemIndex}">
      <label for="item${itemIndex}">${itemToAdd}</label>
    </li>
  `;

  if (isFirstItem) itemsList.innerHTML = itemTemplate;
  else itemsList.innerHTML += itemTemplate;

  // addItems.querySelector('input[name="item"]').value = '';
  this.reset();

  updateLocalStorage(); 
}

function handleCheck(e) {
  e.stopImmediatePropagation();
  if (e.target.tagName === 'INPUT') {
    const targetIndex = e.target.dataset.index;
    items[targetIndex].checked = e.target.checked;

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  console.log('update storage');
  items.forEach(item => {
    console.log(item);
    localStorage.setItem(`${items.indexOf(item)}`, JSON.stringify(item));
  });
  console.log(localStorage.length);
}

function loadFromStorage() {
  // localStorage.clear();
  // updateLocalStorage();
  console.log('load storage');
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', handleCheck);
window.addEventListener('load', loadFromStorage);