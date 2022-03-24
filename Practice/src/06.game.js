"use strict"
import Field from './06.field.js';
import * as sound from './06.sound.js';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
});


// Builder Pattern
export class GameBuilder{
    carrotCnt(num){
        this.carrotCnt = num;
        return this;
    }
    
    bugCnt(num){
        this.bugCnt = num;
        return this;
    }

    gameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    imgSize(size){
        this.imgSize = size;
        return this;
    }

    build(){
        return new Game(
            this.carrotCnt,
            this.bugCnt,
            this.gameDuration,
            this.imgSize
        );
    }
}

// score start time
class Game{
    constructor(carrotCnt, bugCnt, timeDefault, imgSize){
        this.playBtn = document.querySelector(".play");
        this.timer = document.querySelector(".timer");
        this.counter = document.querySelector(".counter");
        this.carrotCnt = carrotCnt;
        this.bugCnt = bugCnt;
        this.imgSize = imgSize;
        this.timeDefault = timeDefault;

        this.started = false;
        this.cnt = 0;
        this.timerStart=undefined;

        this.gameField = new Field(carrotCnt, bugCnt, imgSize);
        this.gameField.setClickListener(this.onItemClick);

        this.playBtn.addEventListener('click',()=>{
            if(this.started){
                this.stop(Reason.cancel);
            }else{
                this.start();
            }
        });
    }

    initGame(){
        this.cnt = 0;
        this.gameField.init();
        this.counter.innerText = this.carrotCnt;
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }

    start(){
        this.started = !this.started;
        this.initGame();     
        this.showStopBtn();
        this.showTimerAndScore();
        this.startGameTimer();
    }
    
    stop(reason){
        this.started = false;
        this.StopGameTimer();
        this.hideStartBtn();
        this.onGameStop && this.onGameStop(reason);
    }
    
    onItemClick = (item)=>{
        if(!this.started){
            return;
        }
        
        if(item == 'carrot'){
            this.cnt++;
            this.updateScoreBoard(this.cnt);
            sound.playCarrot();
        }
        else if(item =='bug'){
            this.stop(Reason.lose);
        }
        if(this.cnt == this.carrotCnt){
            this.stop(Reason.win);
        }
    }


    showNode(node){
        node.style.visibility = 'visible';
    }

    hideNode(node){
        node.style.visibility = "hidden";
    }

    showStopBtn(){
        const icon = this.playBtn.querySelector('.fa');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.showNode(this.playBtn);
    }
    
    showTimerAndScore(){
        this.showNode(this.timer);
        this.showNode(this.counter);
    }
    
    hideStartBtn(){
        this.hideNode(this.playBtn);
    }
    
    updateScoreBoard(cnt){
        this.counter.innerText = this.carrotCnt - cnt;
    }

    updateTimerText(t){
        let min = parseInt(t/60);
        let sec = t%60;
    
        if(sec<10){
            this.timer.innerText = `${String(min)}:0${String(sec)}`
        }else{
            this.timer.innerText = `${String(min)}:${String(sec)}`
        }
    }
    
    startGameTimer(){
        let time = this.timeDefault;
        this.updateTimerText(time);

        this.timerStart = setInterval(()=>{
        if(time<=0){
            clearInterval(this.timerStart);
            this.stop(Reason.lose);
        }
        else{
            this.updateTimerText(--time);
        }
        },1000)
}

    StopGameTimer(){
        clearInterval(this.timerStart);
    }
}