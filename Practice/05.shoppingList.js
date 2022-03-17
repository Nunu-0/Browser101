'use strict';
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click',()=>{
    newRegister();
});

function enterkey() {
    if (window.event.keyCode == 13) {
         // 엔터키가 눌렸을 때 실행할 내용
        newRegister();
    }
}


function newRegister(){
    const inputT = document.querySelector('#inputT');
    const shoppingList = document.querySelector('.shoppingList');

    var thing = document.createTextNode(inputT.value); // 텍스트 필드 내용 가져오기
    var newD = document.createElement("div"); // 새로운 div 요소 생성
    var newP = document.createElement("p");
    var delBtn = document.createElement("i");
    newD.setAttribute("class", "list");
    delBtn.setAttribute("class", "far fa-trash-alt del");
    
    newP.appendChild(thing); // element(div)-text(thing) 연결
    newD.appendChild(newP); 
    newD.appendChild(delBtn);
    shoppingList.insertBefore(newD, shoppingList.childNodes[0]); // shoppingList-element(newD) 연결
    
    inputT.value = ""; // text input 비우기 

    var remove = document.querySelectorAll(".del");

    for (var i=0; i< remove.length; i++){
        remove[i].addEventListener("click", function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
                // 현제 노드 -> 부모 -> 부모의 자식의 부모 삭제
            
        });
    }
}