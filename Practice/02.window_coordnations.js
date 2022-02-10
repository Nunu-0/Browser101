'use strict';


function pink_click(){
    const pink = document.querySelector(".pink");
    const client = pink.getBoundingClientRect();
    const scrollY = pageYOffset;
    console.log(`clinet: ${client.top}, ${client.left}`);
    console.log(`page: ${client.top + scrollY}, ${client.left}`);
};
