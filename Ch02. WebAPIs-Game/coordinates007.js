'use strict';

const coordView = document.querySelector('.coordView');
const img = document.querySelector('img');
const columnLine = document.querySelector('.columnLine');
const rowLine = document.querySelector('.rowLine');

addEventListener('load', () =>{
    const targetRect = img.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfWidth = targetRect.width /2;
    const targetHalfHeight = targetRect.height /2;

    window.addEventListener('mousemove', (e)=>{;
        const x = e.clientX;
        const y = e.clientY;
        let viewX = 20;
        let viewY = 20;

        rowLine.style.transform= `translateX(${x}px)`;
        columnLine.style.transform= `translateY(${y}px)`;
        img.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        coordView.style.transform = `translate(${x}px, ${y}px)`;
        coordView.textContent = `${x} x ${y}`;
        if (x+110 > window.innerWidth){
            viewX= -120;
        }else viewX= 20;
        if(y+70 > window.innerHeight){
            viewY= -40;
        }
        else viewY= 20;
        coordView.style.transform= `translate(${x+viewX}px, ${y+viewY}px)`;
    });
})