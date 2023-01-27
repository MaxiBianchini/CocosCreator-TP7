// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    Puntaje:cc.Label = null;

    @property(cc.TextAsset)
    FileTXTPuntaje:cc.TextAsset = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
        this.Puntaje.string ='Puntaje: '+ this.FileTXTPuntaje;
    }

    start () {

    }

    // update (dt) {}
}
