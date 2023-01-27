// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    SonidoExplotion:cc.AudioClip = null;

    Direccion:number;

    onCollisionEnter(otherCollider, selfCollider){
        
        if(otherCollider.tag == 0) {

            this.Direccion *= -1;
            this.node.scaleY *= -1;
            this.node.scaleX *= -1;
        }

        if(otherCollider.tag == 3) {

            this.node.parent.getComponent('Game').ControlPuntaje();
            cc.audioEngine.playEffect(this.SonidoExplotion,false);
            this.node.destroy();
        }

    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Direccion = -1;
    }

    start () {

    }

    update (dt) {

        this.node.setPosition(this.node.getPosition().x + (this.Direccion * 5), this.node.getPosition().y);
    }
}
