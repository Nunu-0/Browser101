"use strict";

export default class PopUp{
    constructor(){
        this.popUp = document.querySelector(".pop-up");
        this.retry = document.querySelector(".retry");
        this.result = document.querySelector(".result");
        this.retry.addEventListener('click',()=>{
            this.onClick && this.onClick();
        })
    }
    
    setClickListener(onClick){
        this.onClick = onClick;
    }
    
    showWithText(text){
        this.result.innerText = text;
        this.popUp.classList.remove('pop-up__hide');
    }

    hide(){
        this.popUp.classList.add('pop-up__hide');
    }
}