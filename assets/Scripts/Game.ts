// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property (cc.Node)
    Ficha:cc.Node = null;

    @property (cc.Node)
    Base:cc.Node = null;

    @property (cc.Prefab)
    Nave:cc.Prefab = null;

    @property (cc.Label)
    CartelVida:cc.Label = null;

    @property (cc.Label)
    CartelPuntaje:cc.Label = null;

    @property (cc.Label)
    CartelTiempo:cc.Label = null;

    @property (cc.Label)
    CartelNivel:cc.Label = null;

    @property (cc.Label)
    Objetivo1:cc.Label = null;
    @property (cc.Label)
    Objetivo2:cc.Label = null;
    @property (cc.Label)
    Objetivo3:cc.Label = null;

    @property(cc.AudioClip)
    SonidoWin:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoLose:cc.AudioClip = null;

    @property(cc.AudioClip)
    Musica:cc.AudioClip = null;

    @property(cc.TextAsset)
    FileTXTPuntaje:cc.TextAsset = null;

    @property(cc.TextAsset)
    FileTXTNivel:cc.TextAsset = null;

    VelocidadFicha:number;
    VelocidadBase:number;
    TimerObjetivo:number;
    playerTiempo:number;
    playerScore:number;
    playervidas:number;
    TimerNaves:number;
    TimerJuego:number;
    NumEscena:number;

    TimerPantallaOn:boolean;

    PulsarBoton(event){
        switch(event.keyCode){
            case cc.macro.KEY.right:
                if (!this.Ficha.getComponent('Ficha').VerVolar()) this.Ficha.getComponent('Ficha').Mover(this.VelocidadBase);
                
                this.Base.setPosition(this.Base.getPosition().x + this.VelocidadBase, this.Base.getPosition().y);
                break;

            case cc.macro.KEY.left:
                if (!this.Ficha.getComponent('Ficha').VerVolar()) this.Ficha.getComponent('Ficha').Mover(-this.VelocidadBase);
            
                this.Base.setPosition(this.Base.getPosition().x - this.VelocidadBase, this.Base.getPosition().y);
                break;
                
            case cc.macro.KEY.space:
                this.Ficha.getComponent('Ficha').Pegado();
                break;
        }
    }

    PosBaseX(){
        return this.Base.getPosition().x;
    }

    PosBaseY(){
        return this.Base.getPosition().y;
    }

    VerVelocidadFicha(){
        return this.VelocidadFicha;
    }

    CrearNave(){

        let NuevaNave = cc.instantiate(this.Nave);

        var randX = 0;
        var randY = 0;
        randX = (Math.random()* -400)  + 400;
        randY = (Math.random()* -300)  + 300;

        NuevaNave.setPosition(randX ,randY);
        this.node.addChild(NuevaNave);
    }

    ControlVidas(){

        this.playervidas -= 1;
        this.CartelVida.string = 'Vidas: '+ this.playervidas.toString();

        if (this.playervidas == 0) this.Perdio();
    }

    ControlPuntaje(){

        this.playerScore += 100;
        this.CartelPuntaje.string = 'Puntaje: '+ this.playerScore.toString();

        if (this.NumEscena == 1) {
            if (this.playerScore == 500) this.Gano();
        }
        else  if (this.NumEscena == 2) {
            if (this.playerScore == 1000) this.Gano();
        }  
    }

    ControlTiempo(){

        this.playerTiempo += 1;
        this.CartelTiempo.string = 'Tiempo: '+ this.playerTiempo.toString();

        if (this.NumEscena == 1) {
            if (this.playerTiempo == 40) this.Perdio();
        }
        else  if (this.NumEscena == 2) {
            if (this.playerTiempo == 60) this.Perdio();
        }
        else  if (this.NumEscena == 3) {
            if (this.playerTiempo == 60) this.Gano();
        }
    }

    Perdio(){
      
        this.FileTXTPuntaje.text =  this.playerScore.toString();
        this.FileTXTNivel.text =  this.NumEscena.toString(); 

        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.SonidoLose,false);

        cc.director.loadScene('Pierdo');
    }

    Gano(){

        this.NumEscena++;
        this.FileTXTPuntaje.text =  this.playerScore.toString();
        this.FileTXTNivel.text =  this.NumEscena.toString();

        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.SonidoWin,false);

        cc.director.loadScene('Gano');
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        cc.audioEngine.playEffect(this.Musica,true);

        this.TimerJuego = 0;
        this.TimerNaves = 0;
        this.TimerObjetivo = 0;
       
        this.playerScore = 0;
        this.playervidas = 3;
        this.playerTiempo = 0;

        this.TimerPantallaOn = false;

        this.FileTXTNivel.url = cc.url.raw("assets/Others/Nivel.txt");
        if (this.FileTXTNivel.toString() == '4') this.FileTXTNivel.text =  '1';

        if (this.FileTXTNivel.toString() == '1') {
            this.VelocidadFicha = 5;
            this.VelocidadBase = 15;
            this.NumEscena = 1;

            this.Objetivo1.enabled = true;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = false;
        }else if (this.FileTXTNivel.toString() == '2'){
            this.VelocidadFicha = 7;
            this.VelocidadBase = 20;
            this.NumEscena = 2;

            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = true;
            this.Objetivo3.enabled = false;
        }else if (this.FileTXTNivel.toString() == '3') {
            this.VelocidadFicha = 10;
            this.VelocidadBase = 22;
            this.NumEscena = 3;

            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = true;
        }

        this.CartelNivel.string = 'Nivel: ' + this.NumEscena;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.PulsarBoton,this);
    }

    start () {

    }

    update (dt) {

        if (this.TimerNaves >= 5){
            this.CrearNave();
            this.TimerNaves = 0;
        }

        if (this.TimerJuego >= 1 && this.TimerPantallaOn){
            this.ControlTiempo();
            this.TimerJuego = 0;
        }

        if(this.TimerObjetivo >= 4){
            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = false;
            this.TimerPantallaOn = true
        }

        this.TimerObjetivo += dt;
        this.TimerJuego += dt;
        this.TimerNaves += dt;
    }
}
