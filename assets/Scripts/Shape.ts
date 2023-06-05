import { _decorator, Component, Node, Prefab, Button, Vec3, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Shape')
export class Shape extends Component {

    // @property({
    //     type: Prefab
    // })
    // public prbCircle: Prefab;

    // @property({
    //     type: Prefab
    // })
    // public prbSquare: Prefab;

     @property({
        type: Node
    })
    private btnSquare: Node;

    public get BtnSquare(): Node {
        return this.btnSquare;
    }
    public set BtnSquare(value: Node) {
        this.btnSquare = value;
    }

    @property({
        type: Node
    })
    private btnCircle: Node;

    public get BtnCircle(): Node {
        return this.btnCircle;
    }
    public set BtnCircle(value: Node) {
        this.btnCircle = value;
    }

}

