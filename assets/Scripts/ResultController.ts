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


    protected start(): void {
        this.showMaxScore();
    }

    protected showMaxScore(): void {
        const tempMaxScore = (localStorage.getItem('maxScore'));
        this.highScore.string = `High Score: ${tempMaxScore}`;
        console.log(tempMaxScore);
    }

    public onClickRestart(): void {
        director.loadScene(Constants.GameGame)
    }

    public onClickMainMenu(): void {
        director.loadScene(Constants.EntryGame)
    }
}

