import { _decorator, Component, Node, Button, Animation, math, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SquareController')
export class SquareController extends Component {
    private anim: Animation;
    protected onLoad(): void {
        this.anim = this.node.getComponent(Animation);
    }

    protected start(): void {
        this.randomPosSquare();
    }

    protected destroyNode(): void {
        this.anim.play();
        this.node.off(Button.EventType.CLICK);
        setTimeout(() => {
            this.node.destroy();
        }, 800);
    }

    protected randomPosSquare(): void {
        let gapXC = math.randomRangeInt(-270, 270);
        let gapYC = math.randomRangeInt(-150, 80)

        this.node.setPosition(new Vec3(gapXC, gapYC, 0));

        this.node.on(Button.EventType.CLICK, this.destroyNode, this);
    }

}
