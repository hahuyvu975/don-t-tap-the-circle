import { _decorator, Component, Node, input, Input, EventTouch, director } from 'cc';
import { Lives } from './Lives';
const { ccclass, property } = _decorator;

import { ScoreGame } from './ScoreGame';
import { Shape } from './Shape';
import { Timer } from './Timer';
import { DataScore } from './DataScore';
import { Constants } from './Constants';

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
        type: Shape
    })
    private shape: Shape;

    private tempCurrentScore: number;
    private tempMaxScore: number;

    protected start(): void {
        
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
       
    }

    public updateHighScore(): void {
        
    }

    protected onTouchCircle(): void {
        if (this.lives.scoreLives === 1) {
            // this.scoreGame.resetScore();
            director.loadScene(Constants.ResultGame)
            
        } else {
            this.lives.minusLives();
        }
    }

    protected scheduleTime(): void {
        this.schedule(function () {
            if (this.timer.time > 1) {
                this.timer.reduceTime();
            } else {
                director.loadScene(Constants.ResultGame);
            }
        }, 1);
    }

    protected update(delta: number): void {

    }
}


