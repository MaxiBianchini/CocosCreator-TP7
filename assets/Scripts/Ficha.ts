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
    SonidoGolpe:cc.AudioClip = null;

    Volar:boolean;
    Pegate:boolean;

    Velocidad:number;
    Lado:number;

    DireccionX:number;
    DireccionY:number;

    VerVolar(){
        return this.Volar;
    }

    onCollisionEnter(otherCollider, selfCollider){
        
        if(otherCollider.tag == 0) this.DireccionX *= -1;
    
        if(otherCollider.tag == 1 || otherCollider.tag == 2) {
            if(otherCollider.tag == 2 && this.Pegate){
                this.Volar = false;
                this.Pegate = false;
            }
            this.DireccionY *= -1;
        }

        cc.audioEngine.playEffect(this.SonidoGolpe,false);
    }

    Pegado(){
        if(this.Volar) this.Pegate = true;
        else this.Volar = true;
    }

    Mover(direccion){
        this.node.setPosition(this.node.getPosition().x + direccion, this.node.getPosition().y);
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Volar = false;
        this.Velocidad = this.node.parent.getComponent('Game').VerVelocidadFicha();

        this.DireccionX = 1;
        this.DireccionY = 1;
    }

    start () {

    }

    update (dt) {

        if (this.Volar){
            this.node.setPosition(this.node.getPosition().x + (this.DireccionX * this.Velocidad), this.node.getPosition().y + (this.DireccionY * this.Velocidad));
        }

        if (this.node.getPosition().y < -320) {

            this.node.setPosition(this.node.parent.getComponent('Game').PosBaseX(), this.node.parent.getComponent('Game').PosBaseY() + 50);
            this.node.parent.getComponent('Game').ControlVidas();
            
            this.DireccionY *= -1; 
            this.Volar = false;
        }
    }
}
