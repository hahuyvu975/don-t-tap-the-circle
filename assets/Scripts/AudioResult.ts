import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioResult')
export class AudioResult extends Component {
    @property({
        type: [AudioClip]
    })
    private audioClip: AudioClip[] = [];

    @property({
        type: AudioSource
    })
    private audioSource: AudioSource = null;
    public get AudioSource(): AudioSource {
        return this.audioSource;
    }
    public set AudioSource(value: AudioSource) {
        this.audioSource = value;
    }

    private _indexAudioResult: number;
    public get indexAudioResult(): number {
        return this._indexAudioResult;
    }
    public set indexAudioResult(value: number) {
        this._indexAudioResult = value;
    }

    public onAudioQueue(index: number): void {
        let audio: AudioClip = this.audioClip[index];
        this.audioSource.playOneShot(audio);
        this.AudioSource.volume = 1;
    }
}

