import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Timer')
export class Timer extends Component {


    @property({
        type: Label
    })
    private timerLabel: Label;

    private _time: number = 59;
    public get time(): number {
        return this._time;
    }
    
    public reduceTime() {
            this._time--;
            this.timerLabel.string = `Timer: ${this._time}`
    }
    

    //how to 
}

