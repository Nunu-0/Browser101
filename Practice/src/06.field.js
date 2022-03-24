"use strict"

export default class Field{
    constructor(carrotCnt, bugCnt, imgSize){
        this.carrotCnt = carrotCnt;
        this.bugCnt = bugCnt;
        this.imgSize = imgSize;
        this.field = document.querySelector(".game__field");
        this.field.addEventListener('click',this.onClick);
    }

    init(){
        this.clear();
        this._addItem('carrot', this.carrotCnt, "img/carrot.png", this.imgSize);
        this._addItem('bug', this.bugCnt, "img/bug.png", this.imgSize);
    }

    onClick = event => {
        const target = event.target;
        if(target.matches('.carrot')){
            // playSound(carrotSound);
            target.remove();
            this.onItemClick && this.onItemClick('carrot');
        }
        else if(target.matches('.bug')){
            this.onItemClick && this.onItemClick('bug');
        }
    }

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }
    
    _addItem(className, count, imgPath, imgSize){
        this.fieldRect = this.field.getBoundingClientRect();
        const x2=this.fieldRect.width;
        const y2=this.fieldRect.height;
        for(let i = 0; i<count; i++){
            const item = document.createElement("img");
            item.setAttribute("src",imgPath);
            item.setAttribute("class",className);
            item.style.position='absolute';
            const x=randomNum(0, x2-imgSize);
            const y=randomNum(0, y2-imgSize);
            item.style.left=`${x}px`;
            item.style.top=`${y}px`;
            this.field.appendChild(item);
        }
    }

    clear(){
        this.field.innerHTML='';
    }
}

function randomNum(min, max){ 
    const randNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randNum; 
};