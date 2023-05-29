import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreGame')
export class ScoreGame extends Component {
    @property({
        type: Label
    })
    private score: Label;

    @property({
        type: Label
    })
    private highScore: Label;

    private _currentScore: number = 0;
    public get currentScore(): number {
        return this._currentScore;
    }
    public set currentScore(value: number) {
        this._currentScore = value;
    }

    private _maxScore: number = 0;
    public get maxScore(): number {
        return this._maxScore;
    }
    public set maxScore(value: number) {
        this._maxScore = value;
    }
    
    private getScoreLocal: number;
    

    public addScore(): void {
        this.currentScore++;
        this.score.string = `Score: ${this.currentScore}`;
        if(!localStorage.getItem('maxScore')){
            localStorage.setItem('maxScore', (this.currentScore.toString()));
        }
        if(this.currentScore >= parseInt(localStorage.getItem('maxScore'))){
            this.maxScore++;
            localStorage.setItem('maxScore', (this.currentScore.toString()));
        }else {
            return;
        }
    }
    
    public overralScore() {
        this.maxScore = parseInt(localStorage.getItem('maxScore'));
        console.log(this.maxScore);
        this.highScore.string = `High Score: ${this._maxScore}`;
    }

    public resetScore(): void {
        this.currentScore = 0;
    }
}

