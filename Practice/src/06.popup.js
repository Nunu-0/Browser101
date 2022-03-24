"use strict";

export default class PopUp{
    constructor(){
        this.popUp = document.querySelector(".pop-up");
        this.retry = document.querySelector(".retry");
        this.result = document.querySelector(".result");
        this.clickBlock = document.querySelector(".pop-up__block");
        this.retry.addEventListener('click',()=>{
            this.onClick && this.onClick();
        })
    }
    
    setClickListener(onClick){
        this.onClick = onClick;
    }
    
    showWithText(text){
        this.result.innerText = text;
        this.clickBlock.classList.add('pop-up__hide');
    }

    hide(){
        this.clickBlock.classList.remove('pop-up__hide');
    }
}