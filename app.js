'use strict'

let input = document.getElementById('input');
let button = document.getElementById('button');
let list = document.getElementById('list');
let select = document.getElementById('select');


button.addEventListener('click', addItem);
button.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) addItem(event);
});
input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) addItem(event);
});

function addItem(event) {

    event.preventDefault();

    if (input.value == '') return ;

    let newElem = document.createElement('div');
    newElem.classList.add('listItem');

    let text = document.createElement('div');
    text.innerHTML = input.value;
    text.classList.add('itemText');

    let checkButton = document.createElement('i');
    checkButton.classList.add('fa', 'fa-check');

    let deleteButton = document.createElement('i');
    deleteButton.classList.add('fa','fa-trash');

    newElem.appendChild(text);
    newElem.appendChild(checkButton);
    newElem.appendChild(deleteButton);

    list.appendChild(newElem);
    input.value = '';
}


list.addEventListener('click', checkAndDelete);

function checkAndDelete(event) {
    let item = event.target;
    if (item.classList[1] === 'fa-trash') {
        item.parentElement.classList.add('fall');
        setTimeout(function() {
            item.parentElement.remove();
        }, 500);
    } else if (item.classList[1] === 'fa-check') {
        item.parentElement.classList.toggle('completed');
        item.parentElement.childNodes[0].classList.toggle('completed-text');
    }
}


select.addEventListener('click', filterSelect);

function filterSelect(event) {

    let selectedOption = event.target.value;
    list.childNodes.forEach((element) => {
        if (selectedOption === 'all') element.classList.remove('invisible')
        else if (selectedOption === 'completed') {
            if (element.classList.contains('completed')) element.classList.remove('invisible')
            else element.classList.add('invisible')
        } else if (selectedOption === 'uncompleted') {
            if (element.classList.contains('completed')) element.classList.add('invisible')
            else element.classList.remove('invisible')
        }
    });
    
}