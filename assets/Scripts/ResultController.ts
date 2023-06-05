import { GameParameter } from './GameParameter';
import { _decorator, Component, Node, director, Label, find } from 'cc';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';
import { AudioResult } from './AudioResult';

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
        type: AudioResult
    })
    private audioResult: AudioResult;

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
        if(tempMaxScore === null) {
            this.highScore.string = `High Score: 0`;
        }else {
            this.highScore.string = `High Score: ${tempMaxScore}`;
        }
    }
    protected showCurrentScore(): void {
        this.scoreLabel.string = `Score: ${this.currentScore}`;
    }

    public onClickRestart(): void {
        if(localStorage.getItem('volume') === '1'){
            this.audioResult.onAudioQueue(0);
        }else {
            
        }
        
        director.loadScene(Constants.GameGame)
    }

    public onClickMainMenu(): void {
        if(localStorage.getItem('volume') === '1'){
            this.audioResult.onAudioQueue(0);
        }else {
            
        }
        director.loadScene(Constants.EntryGame)
    }
}

