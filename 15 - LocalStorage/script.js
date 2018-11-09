const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// load data from localStorage or start with an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  console.log('additem');
  const itemToAdd = this.querySelector('input[name="item"]').value;

  items.push(
    { 
      text: itemToAdd,
      checked: false
    }
  );
  
  populateList(items, itemsList);
  
  // updateLocalStorage(); 
  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
  console.table(items);

  
}

function populateList(items = [], container) {
  container.innerHTML = items.map((item, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" 
        ${item.checked ? 'checked' : ''}>
        <label for="item${i}">${item.text}</label>
      </li>
    `;
  }).join('');
}

function handleCheck(e) {
  if (!e.target.matches('input')) return;
  const targetIndex = e.target.dataset.index;
  items[targetIndex].checked = !items[targetIndex].checked;

  localStorage.setItem('items', JSON.stringify(items));

  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', handleCheck);
// window.addEventListener('load', loadFromStorage);

// Load the list on page load:
populateList(items, itemsList);