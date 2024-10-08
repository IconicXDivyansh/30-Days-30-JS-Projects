const addItems = document.querySelector(".add-items");
const itemsContainer = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // fetch items from localStorage every time so that already existing items don't get lost

function addItem(e) { 
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const newItem = {
        text,
        done: false
    }

    console.log(newItem);
    // add it to the list of items
    items.push(newItem);
    populateList(items, itemsContainer)
    // add new item to local Storage
    localStorage.setItem('items', JSON.stringify(items));

    // reset the input field, -> good ui / ux
    this.reset();
}




function populateList(dishes = [], itemsContainer) { 
    itemsContainer.innerHTML = dishes.map((dish, i) => {
        return `<li>
        <input type='checkbox' data-index=${i} id='item${i}' ${dish.done ? 'checked' : ''}>
        <label for="item${i}">${dish.text}</label></li>`
    }).join('');
}

function toggleChecked(e) { 
    if (!e.target.matches('input')) return;
    console.log(e.target);
    const ele = e.target;
    const index = ele.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsContainer)
}

itemsContainer.addEventListener('click', toggleChecked)

addItems.addEventListener('submit', addItem);



populateList(items, itemsContainer);
// window.addEventListener('DOMContentLoaded', populateList(items,itemsContainer))