import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';

@ccclass('EntryController')
export class EntryController extends Component {
    
    public playGame(): void {
        director.loadScene(Constants.GameGame);
    }

    public resetGame(): void {
        console.log('reset active');
    }
    
}


