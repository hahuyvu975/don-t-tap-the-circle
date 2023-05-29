import { _decorator, Component, Node, director } from 'cc';
import { AudioEntryController } from './AudioEntryController';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';

@ccclass('EntryController')
export class EntryController extends Component {

    @property({
        type: AudioEntryController
    })
    private audioEntry: AudioEntryController;

    public playGame(): void {
        this.audioEntry.onPlaySoundEffect(0);
        director.loadScene(Constants.GameGame);
    }

    public resetGame(): void {
        this.audioEntry.onPlaySoundEffect(0);
        localStorage.setItem('maxScore', '0');
    }
    
}


