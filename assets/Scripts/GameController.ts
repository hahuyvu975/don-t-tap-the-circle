import { _decorator, Component, EventTarget, Node, input, Input, director, Animation, math, Vec3, instantiate, Prefab, Button, find } from 'cc';
import { Lives } from './Lives';
const { ccclass, property } = _decorator;

import { ScoreGame } from './ScoreGame';
import { Timer } from './Timer';
import { Constants } from './Constants';
import { Shape } from './Shape';
import { AudioGame } from './AudioGame';
import { GameParameter } from './GameParameter';

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

    @property({
        type: AudioGame
    })
    private audioCtrl: AudioGame;

    @property({
        type: Prefab
    })
    private animPrefab: Prefab;

    protected onLoad(): void {
        this.initListeners();
        this.scheduleTime();
    }

    protected start(): void {
        // this.createNodeCircle();
        // this.createNodeSquare();
    }

    protected initListeners(): void {
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchSquare, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCircle, this);
    }



    protected onTouchSquare(): void {
        this.onClick(this.shape.BtnSquare);
        // this.explodingAnim.p;
        this.scoreGame.addScore();
        this.scoreGame.overralScore();
        this.randomPos();
        if (localStorage.getItem('volume') === '1') {
            this.audioCtrl.onAudioQueue(0);
        }
    }

    protected onTouchCircle(): void {
      this.onClick(this.shape.BtnCircle);
        // this.explodingAnim.playAnimation();
        this.randomPos();
        if (this.lives.scoreLives === 1) {
            // this.scoreGame.resetScore();
            this.overGame();
            if (localStorage.getItem('volume') === '1') {
                this.audioCtrl.onAudioQueue(2);
            }
        } else {
            this.lives.minusLives();
            if (localStorage.getItem('volume') === '1') {
                this.audioCtrl.onAudioQueue(1);
            }
        }
    }

    private onClick(node: Node): void {
        let element = instantiate(this.animPrefab);
        element.parent = this.shape.node;
        element.setPosition(node.position);
    }

    protected randomPos(): void {

        let gapXS = math.randomRangeInt(-270, 270);
        let gapYS = math.randomRangeInt(-190, 80)

        let gapXC = math.randomRangeInt(-270, 270);
        let gapYC = math.randomRangeInt(-200, 80);

        if (gapXC === gapXS || gapYS === gapYC) {
            gapXC += 20;
            gapYC += -20;
        }

        this.shape.BtnSquare.setPosition(gapXS, gapYS, 0);

        this.shape.BtnCircle.setPosition(gapXC, gapYC, 0);
    }

    // Time game over
    protected scheduleTime(): void {
        this.schedule(function () {
            if (this.timer.time > 1) {
                this.timer.reduceTime();
            } else {
                this.overGame();
                if (localStorage.getItem('volume') === '1') {
                    this.audioCtrl.onAudioQueue(2);
                }
            }
        }, 1);
    }

    protected overGame(): void {
        const node = new Node('GameParameter');
        const param = node.addComponent(GameParameter);
        param.indexScore = this.scoreGame.currentScore;

        director.addPersistRootNode(node);
        director.loadScene(Constants.ResultGame);
    }
}
