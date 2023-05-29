import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioResultController')
export class AudioResultController extends Component {
    @property({
        type: [AudioClip]
    })
    private audioClip: AudioClip[] = [];

    @property({
        type: AudioSource
    })  
    private audioSource: AudioSource = null;

    public onPlaySoundEffect(index: number): void {
        let audio: AudioClip = this.audioClip[index];
        this.audioSource.playOneShot(audio);
    }
}

