import { _decorator, Component, Node, director, Label, find } from 'cc';
import { AudioResultController } from './AudioResultController';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';
import { GameParameter } from './GameParameter';

@ccclass('ResultController')
export class ResultController extends Component {

    @property({
        type: Label
    })
    private scoreLabel: Label;

    @property({
        type: Label
    })
    private highScore: Label;

    @property({
        type: AudioResultController
    })
    private audioResult: AudioResultController;

    private currentScore: number;

    protected onLoad() {
        let node = find(Constants.GameParameter);
        if(node){
            this.currentScore = node.getComponent(GameParameter).indexScore;
            node.destroy();
        } else {
            this.currentScore = 0;
        }
    }
    //onLoad vs start khác nhau chỗ nào ta? nếu thay start = onLoad code vẫn chạy ok ?
    protected start(): void {
        this.showMaxScore();
        this.showCurrentScore();
    }

    protected showMaxScore(): void {
        const tempMaxScore = (localStorage.getItem('maxScore'));
        this.highScore.string = `High Score: ${tempMaxScore}`;
        console.log(tempMaxScore);
    }
    protected showCurrentScore(): void {
        this.scoreLabel.string = `Score: ${this.currentScore}`;
    }

    public onClickRestart(): void {
        this.audioResult.onPlaySoundEffect(0);
        director.loadScene(Constants.GameGame)
    }

    public onClickMainMenu(): void {
        this.audioResult.onPlaySoundEffect(0);
        director.loadScene(Constants.EntryGame)
    }
}

