'use strict';
const inputT = document.querySelector('#inputT');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.add');
const forms = document.querySelectorAll('.new-form');

forms.forEach(form=>{
    form.addEventListener('submit',(event)=>{
        event.preventDefault(); // submit reload stop
        onAdd();
    });
})

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

function onAdd(){
    var thing = inputT.value; 
    if(thing === ''){
        inputT.focus()
        return;
    }
    const item = createItem(thing);
    items.appendChild(item);
    item.scrollIntoView({block:'center'});
    inputT.value = "";
    inputT.focus()
}

let id = 0; // UUID 
function createItem(thing){
    const itemRow= document.createElement("li");
    itemRow.setAttribute("class", "item__row");
    itemRow.setAttribute("data-id", id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${thing}</span>
            <button class="item__delete">
                <i class="far fa-trash-alt del" data-id = ${id}></i>
            </button>
        </div>
    `;
    id++;
    return itemRow;
}
