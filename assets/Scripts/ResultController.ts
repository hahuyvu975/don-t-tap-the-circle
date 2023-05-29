import { _decorator, Component, Node, director, Label } from 'cc';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';

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

    private maxScore: number = 0;
    private currentScore: number;

    

    protected onLoad(): void {
        this.showMaxScore();
    }

    protected showMaxScore(): void {
        this.maxScore = parseInt(localStorage.getItem('maxScore'));
        this.highScore.string = `High Score: ${this.maxScore}`;
        console.log(this.maxScore);
    }

    public onClickRestart(): void {
        director.loadScene(Constants.GameGame)
    }

    public onClickMainMenu(): void {
        director.loadScene(Constants.EntryGame)
    }
}

