'use strict';
const inputT = document.querySelector('#inputT');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click',()=>{
    onAdd();
});

inputT.addEventListener('keypress',(event)=>{
    if (event.keyCode == 13) {
        onAdd();
    }
})

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

function createItem(thing){
    const itemRow= document.createElement("li");
    var item = document.createElement("div"); // 새로운 div 요소 생성
    var itemName = document.createElement("span");
    var itemDelete = document.createElement("button");
    var icon = document.createElement("i");
    itemRow.setAttribute("class", "item__row");
    item.setAttribute("class", "item");
    itemName.setAttribute("class", "item__name");
    itemDelete.setAttribute("class","item__delete");
    icon.setAttribute("class", "far fa-trash-alt del");
    
    itemRow.appendChild(item);
    item.appendChild(itemName);
    item.appendChild(itemDelete);
    itemDelete.appendChild(icon);

    itemName.innerText = thing;

    itemDelete.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    })

    return itemRow;
}