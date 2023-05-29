import { _decorator, Component, Node, Prefab, Button, Vec3, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Shape')
export class Shape extends Component {

    @property({
        type: Node
    })
    private btnSquare: Node;

    @property({
        type: Node
    })
    private btnCircle: Node;

    private tempLocationSquare: Vec3; 
    private tempLocationCircle: Vec3;


    protected randomPos(): void {
        this.tempLocationSquare = new Vec3(this.btnSquare.position.x, this.btnSquare.position.y, 0);
        this.tempLocationCircle = new Vec3(this.btnCircle.position.x, this.btnCircle.position.y, 0);;

        let gapXS = math.randomRangeInt(-270 , 270);
        let gapYS = math.randomRangeInt(-190 , 80)

        let gapXC = math.randomRangeInt(-270 , 270);
        let gapYC = math.randomRangeInt(-200 , 80)

        if(gapXC === gapXS || gapYS === gapYC){
            gapXC += 20;
            gapYC += -20;
        }

        this.btnSquare.setPosition(gapXS, gapYS, 0);
        this.btnCircle.setPosition(gapXC, gapYC, 0);
    }
}

