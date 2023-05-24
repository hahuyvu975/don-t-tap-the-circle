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

    private currentScore: number;
    private maxScore: number = 0;

    protected updateScore(num: number): void {
        this.currentScore = num;
        this.score.string = `Score: ${this.currentScore}`;
    }

    protected addScore() {
        this.updateScore(this.currentScore + 1);
    }

    protected overralScore() {
        this.maxScore = Math.max(this.maxScore, this.currentScore);
        this.highScore.string = `High Score: ${this.maxScore}`;
    }

}

