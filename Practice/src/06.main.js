'use strict'
import PopUp from './06.popup.js';
import { GameBuilder, Reason } from './06.game.js';
import * as sound from './06.sound.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.carrotCnt(10)
.bugCnt(10)
.gameDuration(5)
.imgSize(80)
.build();

game.setGameStopListener((reason)=>{
    let message;
    sound.stopBg();
    switch(reason){
        case Reason.cancel:
            message = "REPLAY?";
            sound.playAlert();
            break;
        case Reason.win:
            message = "YOU WON!";
            sound.playWin();
            break;
        case Reason.lose:
            message = "YOU LOST";
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
    sound.playBg();
    game.start();
    gameFinishBanner.hide();
})

sound.playBg();