import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lives')
export class Lives extends Component {
    
    @property({
        type: Label
    })
    private livesLabel: Label;

    private _scoreLives: number = 3;

    public get scoreLives(): number {
        return this._scoreLives;
    }

    public minusLives(): void {
        this._scoreLives--;
        this.livesLabel.string = `Lives: ${this.scoreLives}`;
    }
}

