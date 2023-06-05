import { _decorator, Component, Node, director, AudioClip, input, Input, Button, __private } from 'cc';
import { AudioEntry } from './AudioEntry';
const { ccclass, property } = _decorator;

import { Constants } from './Constants';

@ccclass('EntryController')
export class EntryController extends Component {

    @property({
        type: AudioEntry
    })
    private audioCtrl: AudioEntry;

    @property({
        type: Node
    })
    private turnOn: Node;

    @property({
        type: Node
    })
    private turnOff: Node;

    protected onLoad(): void {
        if(!localStorage.getItem('volume')){
            localStorage.setItem('volume', '1');
        }
        if (localStorage.getItem('volume') === '1') {
            this.turnOff.active = false;
            this.turnOn.active = true;
        } else {
            this.turnOff.active = true;
            this.turnOn.active = false;
        }
    }
    
    protected playGame(): void {
        if (localStorage.getItem('volume') === '1') {
            this.audioCtrl.onAudioQueue(3);
        } else {

        }
        director.loadScene(Constants.GameGame);
    }

    protected resetGame(): void {
        if (localStorage.getItem('volume') === '1') {
            this.audioCtrl.onAudioQueue(3);
        } else {

        }
        localStorage.setItem('maxScore', '0');
    }

    // turn on volume
    protected onSoundButtonClick(): void {
        this.audioCtrl.AudioSource.volume = 0;
        localStorage.setItem('volume', this.audioCtrl.AudioSource.volume.toString());
        this.turnOn.active = false;
        this.turnOff.active = true;

    }
    // turn off volume
    protected offSoundButtonClick(): void {
        this.audioCtrl.AudioSource.volume = 1;
        localStorage.setItem('volume', this.audioCtrl.AudioSource.volume.toString());
        this.turnOn.active = true;
        this.turnOff.active = false;
    }
}


