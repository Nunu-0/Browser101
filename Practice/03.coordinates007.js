'use strict';

const coordView = document.querySelector('.coordView');
const img = document.querySelector('img');
const columnLine = document.querySelector('.columnLine');
const rowLine = document.querySelector('.rowLine');

window.addEventListener('mousemove', (e)=>{;
    const x = e.clientX;
    const y = e.clientY;
    let viewX = 20;
    let viewY = 20;

    img.style.top= `${y}px`;
    img.style.left= `${x}px`;
    columnLine.style.top= `${y}px`;
    rowLine.style.left= `${x}px`;
    coordView.textContent = `${x} x ${y}`;
    coordView.style.top= `${y}px`;
    coordView.style.left= `${x}px`;
    if (x+110 > window.innerWidth){
        viewX= -120;
    }else viewX= 20;
    if(y+70 > window.innerHeight){
        viewY= -40;
    }
    else viewY= 20;
    coordView.style.transform= `translate(${viewX}px, ${viewY}px)`;
});