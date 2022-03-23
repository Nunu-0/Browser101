'use strict'

const field = document.querySelector(".game__field");
const playBtn = document.querySelector(".play");
const timer = document.querySelector(".timer");
const counter = document.querySelector(".counter");
const popUp = document.querySelector(".pop-up");
const retry = document.querySelector(".retry");
const result = document.querySelector(".result");
const CARROT_CNT=10;
const BUG_CNT=10;
const timeDefault = 5;
const imgSize = 80;

let started = false;
let cnt = 0;
let timerStart=undefined;
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const winSound = new Audio('sound/game_win.mp3');
const alertSound = new Audio('sound/alert.wav');
const bgSound = new Audio('sound/bg.mp3');

playSound(bgSound);

function init(){
    field.innerHTML='';
    counter.innerText = CARROT_CNT;
    cnt = 0;
    addItem('carrot', CARROT_CNT, "img/carrot.png");
    addItem('bug', BUG_CNT, "img/bug.png");
};

function addItem(className, count, imgPath){
    const fieldRect = field.getBoundingClientRect();
    const x2=fieldRect.width;
    const y2=fieldRect.height;
    for(let i = 0; i<count; i++){
        const item = document.createElement("img");
        item.setAttribute("src",imgPath);
        item.setAttribute("class",className);
        item.style.position='absolute';
        const x=randomNum(0, x2-imgSize);
        const y=randomNum(0, y2-imgSize);
        item.style.left=`${x}px`;
        item.style.top=`${y}px`;
        field.appendChild(item);
    }
}

function randomNum(min, max){ 
    let randNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randNum; 
};

function showStopBtn(){
    const icon = playBtn.querySelector('.fa');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    playBtn.style.visibility = 'visible';
}

function showTimerAndScore(){
    timer.style.visibility = 'visible';
    counter.style.visibility = 'visible';
}

function hideStartBtn(){
    playBtn.style.visibility = 'hidden';
}

function hidePopUp(){
    popUp.classList.add('pop-up__hide');
}

function start(){
    started = !started;
    playSound(bgSound);
    init();
    showStopBtn();
    showTimerAndScore();
    hidePopUp();
    startGameTimer();
}

function finish(outcome){
    started = false;
    StopGameTimer();
    hideStartBtn();
    if(outcome){
        playSound(winSound);
        showPopUpWithText('YOU WON');
    }else{
        playSound(bugSound);
        showPopUpWithText("YOU LOST");
    }
    stopSound(bgSound);
}

function stop(){
    started = false;
    StopGameTimer();
    hideStartBtn();
    showPopUpWithText("RETRY?");
    playSound(alertSound);
    stopSound(bgSound);
}

function showPopUpWithText(text){
    result.innerText = text;
    popUp.classList.remove('pop-up__hide');
}

function startGameTimer(){
    let time=timeDefault;
    updateTimerText(time);

    timerStart = setInterval(()=>{
    if(time<=0){
        clearInterval(timerStart);
        finish(false);
    }
    else{
        updateTimerText(--time);
    }
    },1000)
}

function updateTimerText(t){
    let min = parseInt(t/60);
    let sec = t%60;

    if(sec<10){
        timer.innerText = `${String(min)}:0${String(sec)}`
    }else{
        timer.innerText = `${String(min)}:${String(sec)}`
    }
}

function StopGameTimer(){
    clearInterval(timerStart);
}

function onFieldClick(event){
    if(!started){
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
        cnt++;
        updateScoreBoard();
        playSound(carrotSound);
        target.remove();
    }
    else if(target.matches('.bug')){
        finish(false);
    }
    if(cnt === CARROT_CNT){
        finish(true);
    }
}

function updateScoreBoard(){
    counter.innerText = CARROT_CNT - cnt;
}

function playSound(sound){
    //sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}

playBtn.addEventListener('click', ()=>{
    if(started){
        stop();}
    else{
        start();
    }
})

retry.addEventListener('click',()=>{
    start();
})

field.addEventListener('click', onFieldClick)