import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameParameter')
export class GameParameter extends Component {
    private _indexScore: number;
    public get indexScore(): number {
        return this._indexScore;
    }
    public set indexScore(value: number) {
        this._indexScore = value;
    }
}

