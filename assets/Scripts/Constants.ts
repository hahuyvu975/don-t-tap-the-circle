import { DataScore } from './DataScore';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Constants')
export class Constants extends Component {
   public static readonly EntryGame = 'Entry';
   public static readonly GameGame = 'Game';
   public static readonly ResultGame = 'Result';

   public static readonly DataScore = 'DataScore';
}


