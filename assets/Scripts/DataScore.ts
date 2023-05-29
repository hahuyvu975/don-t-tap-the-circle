import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DataScore')
export class DataScore extends Component {
    private _dataCurrentScore: number;
    public get dataCurrentScore(): number {
        return this._dataCurrentScore;
    }
    public set dataCurrentScore(value: number) {
        this._dataCurrentScore = value;
    }

    private _dataMaxScore: number;
    public get dataMaxScore(): number {
        return this._dataMaxScore;
    }
    public set dataMaxScore(value: number) {
        this._dataMaxScore = value;
    }
}

