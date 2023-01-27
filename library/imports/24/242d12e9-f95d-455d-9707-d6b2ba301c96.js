"use strict";
cc._RF.push(module, '242d1Lp+V1FXZcH1rK6MByW', 'Game');
// Scripts/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Ficha = null;
        _this.Base = null;
        _this.Nave = null;
        _this.CartelVida = null;
        _this.CartelPuntaje = null;
        _this.CartelTiempo = null;
        _this.CartelNivel = null;
        _this.Objetivo1 = null;
        _this.Objetivo2 = null;
        _this.Objetivo3 = null;
        _this.SonidoWin = null;
        _this.SonidoLose = null;
        _this.Musica = null;
        _this.FileTXTPuntaje = null;
        _this.FileTXTNivel = null;
        return _this;
    }
    NewClass.prototype.PulsarBoton = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                if (!this.Ficha.getComponent('Ficha').VerVolar())
                    this.Ficha.getComponent('Ficha').Mover(this.VelocidadBase);
                this.Base.setPosition(this.Base.getPosition().x + this.VelocidadBase, this.Base.getPosition().y);
                break;
            case cc.macro.KEY.left:
                if (!this.Ficha.getComponent('Ficha').VerVolar())
                    this.Ficha.getComponent('Ficha').Mover(-this.VelocidadBase);
                this.Base.setPosition(this.Base.getPosition().x - this.VelocidadBase, this.Base.getPosition().y);
                break;
            case cc.macro.KEY.space:
                this.Ficha.getComponent('Ficha').Pegado();
                break;
        }
    };
    NewClass.prototype.PosBaseX = function () {
        return this.Base.getPosition().x;
    };
    NewClass.prototype.PosBaseY = function () {
        return this.Base.getPosition().y;
    };
    NewClass.prototype.VerVelocidadFicha = function () {
        return this.VelocidadFicha;
    };
    NewClass.prototype.CrearNave = function () {
        var NuevaNave = cc.instantiate(this.Nave);
        var randX = 0;
        var randY = 0;
        randX = (Math.random() * -400) + 400;
        randY = (Math.random() * -300) + 300;
        NuevaNave.setPosition(randX, randY);
        this.node.addChild(NuevaNave);
    };
    NewClass.prototype.ControlVidas = function () {
        this.playervidas -= 1;
        this.CartelVida.string = 'Vidas: ' + this.playervidas.toString();
        if (this.playervidas == 0)
            this.Perdio();
    };
    NewClass.prototype.ControlPuntaje = function () {
        this.playerScore += 100;
        this.CartelPuntaje.string = 'Puntaje: ' + this.playerScore.toString();
        if (this.NumEscena == 1) {
            if (this.playerScore == 500)
                this.Gano();
        }
        else if (this.NumEscena == 2) {
            if (this.playerScore == 1000)
                this.Gano();
        }
    };
    NewClass.prototype.ControlTiempo = function () {
        this.playerTiempo += 1;
        this.CartelTiempo.string = 'Tiempo: ' + this.playerTiempo.toString();
        if (this.NumEscena == 1) {
            if (this.playerTiempo == 40)
                this.Perdio();
        }
        else if (this.NumEscena == 2) {
            if (this.playerTiempo == 60)
                this.Perdio();
        }
        else if (this.NumEscena == 3) {
            if (this.playerTiempo == 60)
                this.Gano();
        }
    };
    NewClass.prototype.Perdio = function () {
        this.FileTXTPuntaje.text = this.playerScore.toString();
        this.FileTXTNivel.text = this.NumEscena.toString();
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.SonidoLose, false);
        cc.director.loadScene('Pierdo');
    };
    NewClass.prototype.Gano = function () {
        this.NumEscena++;
        this.FileTXTPuntaje.text = this.playerScore.toString();
        this.FileTXTNivel.text = this.NumEscena.toString();
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.SonidoWin, false);
        cc.director.loadScene('Gano');
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.audioEngine.playEffect(this.Musica, true);
        this.TimerJuego = 0;
        this.TimerNaves = 0;
        this.TimerObjetivo = 0;
        this.playerScore = 0;
        this.playervidas = 3;
        this.playerTiempo = 0;
        this.TimerPantallaOn = false;
        this.FileTXTNivel.url = cc.url.raw("assets/Others/Nivel.txt");
        if (this.FileTXTNivel.toString() == '4')
            this.FileTXTNivel.text = '1';
        if (this.FileTXTNivel.toString() == '1') {
            this.VelocidadFicha = 5;
            this.VelocidadBase = 15;
            this.NumEscena = 1;
            this.Objetivo1.enabled = true;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = false;
        }
        else if (this.FileTXTNivel.toString() == '2') {
            this.VelocidadFicha = 7;
            this.VelocidadBase = 20;
            this.NumEscena = 2;
            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = true;
            this.Objetivo3.enabled = false;
        }
        else if (this.FileTXTNivel.toString() == '3') {
            this.VelocidadFicha = 10;
            this.VelocidadBase = 22;
            this.NumEscena = 3;
            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = true;
        }
        this.CartelNivel.string = 'Nivel: ' + this.NumEscena;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.PulsarBoton, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this.TimerNaves >= 5) {
            this.CrearNave();
            this.TimerNaves = 0;
        }
        if (this.TimerJuego >= 1 && this.TimerPantallaOn) {
            this.ControlTiempo();
            this.TimerJuego = 0;
        }
        if (this.TimerObjetivo >= 4) {
            this.Objetivo1.enabled = false;
            this.Objetivo2.enabled = false;
            this.Objetivo3.enabled = false;
            this.TimerPantallaOn = true;
        }
        this.TimerObjetivo += dt;
        this.TimerJuego += dt;
        this.TimerNaves += dt;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Ficha", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Base", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Nave", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelVida", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelPuntaje", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelTiempo", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelNivel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Objetivo1", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Objetivo2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Objetivo3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoWin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoLose", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "Musica", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTPuntaje", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTNivel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();