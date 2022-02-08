'use strict';

const viewScreenSize = () => {
    const screenH = screen.height;
    const screenW = screen.width;
    document.querySelector('.screen').textContent = `window.screen: ${screenW}, ${screenH}`;
}

const viewOuter = () => {
    const outerH = outerHeight;
    const outerW = outerWidth;
    document.querySelector('.outer').textContent= `window.outer: ${outerW}, ${outerH}`;
}   

const viewInner = () => {
    const innerH = innerHeight;
    const innerW = innerWidth;
    document.querySelector('.inner').textContent= `window.inner: ${innerW}, ${innerH}`;
}

const viewClientWidth = () => {
    const clientH = document.documentElement.clientHeight;
    const clientW = document.documentElement.clientWidth;
    document.querySelector('.clientWidth').textContent= `documentElement.clientWidth: ${clientW}, ${clientH}`;
}

const updateSize = ()=>{
    viewScreenSize();
    viewOuter();
    viewInner();
    viewClientWidth();
}

addEventListener('resize', ()=>{
    updateSize();
})

updateSize();