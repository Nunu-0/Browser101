'use strict';

function pink_click(){
    const pink = document.querySelector(".pink");
    const client = pink.getBoundingClientRect();
    const scrollY = pageYOffset;
    console.log(`clinet: ${client.top}, ${client.left}`);
    console.log(`page: ${client.top + scrollY}, ${client.left}`);
};

function upBtn_click(){
    window.scrollTo({top: 0, left: 0, behavior:'smooth'})
};

function down100Btn_click(){
    window.scrollBy(0, 150);
}

function goPink_click(){
    const pink = document.querySelector(".pink");
    pink.scrollIntoView();
};