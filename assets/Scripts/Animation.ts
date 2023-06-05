import { _decorator, Component, Node, Animation, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ExplodingAnim')
export class ExplodingAnim extends Component {

    private anim: Animation

    protected onLoad(): void {
        this.anim = this.node.getComponent(Animation);
    }

    protected start(): void{
        this.anim.play();

        setTimeout(() => {
            this.node.destroy();
        }, 650);
    }

   
}
