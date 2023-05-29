import { _decorator, Component, Node, input, Input, EventTouch, director, AudioSource } from 'cc';
import { Lives } from './Lives';
const { ccclass, property } = _decorator;

import { ScoreGame } from './ScoreGame';
import { Timer } from './Timer';
import { Constants } from './Constants';
import { GameParameter } from './GameParameter';
import { AudioGameController } from './AudioGameController';

@ccclass('GameController')
export class GameController extends Component {

    @property({
        type: ScoreGame
    })
    private scoreGame: ScoreGame;

    @property({
        type: Timer
    })
    private timer: Timer;

    @property({
        type: Lives
    })
    private lives: Lives;

    @property({
        type: AudioGameController
    })
    private audioCtrl: AudioGameController;

    protected start(): void {
        // what should i do? i'm bất lực
    }

    protected onLoad(): void {    
        this.initListeners();
        this.scheduleTime();     
    }

    
    protected initListeners(): void {
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchSquare, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCircle, this);
    }

    protected onTouchSquare(): void {
        this.scoreGame.addScore();
        this.scoreGame.overralScore();
        this.audioCtrl.onPlaySoundEffect(0);
       
    }

    public updateHighScore(): void {
        
    }

    protected onTouchCircle(): void {
        if (this.lives.scoreLives === 1) {
            // this.scoreGame.resetScore();
            this.overGame();
            this.audioCtrl.onPlaySoundEffect(2);
        } else {
            this.lives.minusLives();
            this.audioCtrl.onPlaySoundEffect(1);
        }
    }

    protected scheduleTime(): void {
        this.schedule(function () {
            if (this.timer.time > 1) {
                this.timer.reduceTime();
            } else {
                this.overGame();
                this.audioCtrl.onPlaySoundEffect(2);
            }
        }, 1);
    }

    protected update(delta: number): void {

    }

    protected overGame(): void {
        const node = new Node('GameParameter');
        const param = node.addComponent(GameParameter);
        param.indexScore = this.scoreGame.currentScore;

        director.addPersistRootNode(node);
        director.loadScene(Constants.ResultGame)
    }
}


