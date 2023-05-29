import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioGameController')
export class AudioGameController extends Component {
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

