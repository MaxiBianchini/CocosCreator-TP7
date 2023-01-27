
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtQQztRQS9PRyxXQUFLLEdBQVcsSUFBSSxDQUFDO1FBR3JCLFVBQUksR0FBVyxJQUFJLENBQUM7UUFHcEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFHM0Isb0JBQWMsR0FBZ0IsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWdCLElBQUksQ0FBQzs7SUF1TXJDLENBQUM7SUF6TEcsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUFFLElBQUksQ0FBQyxL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QUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgRmljaGE6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgQmFzZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLlByZWZhYilcclxuICAgIE5hdmU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgQ2FydGVsVmlkYTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5MYWJlbClcclxuICAgIENhcnRlbFB1bnRhamU6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBDYXJ0ZWxUaWVtcG86Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBDYXJ0ZWxOaXZlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5MYWJlbClcclxuICAgIE9iamV0aXZvMTpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgT2JqZXRpdm8yOmNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBPYmpldGl2bzM6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9XaW46Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgU29uaWRvTG9zZTpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBNdXNpY2E6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVFB1bnRhamU6Y2MuVGV4dEFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVE5pdmVsOmNjLlRleHRBc3NldCA9IG51bGw7XHJcblxyXG4gICAgVmVsb2NpZGFkRmljaGE6bnVtYmVyO1xyXG4gICAgVmVsb2NpZGFkQmFzZTpudW1iZXI7XHJcbiAgICBUaW1lck9iamV0aXZvOm51bWJlcjtcclxuICAgIHBsYXllclRpZW1wbzpudW1iZXI7XHJcbiAgICBwbGF5ZXJTY29yZTpudW1iZXI7XHJcbiAgICBwbGF5ZXJ2aWRhczpudW1iZXI7XHJcbiAgICBUaW1lck5hdmVzOm51bWJlcjtcclxuICAgIFRpbWVySnVlZ286bnVtYmVyO1xyXG4gICAgTnVtRXNjZW5hOm51bWJlcjtcclxuXHJcbiAgICBUaW1lclBhbnRhbGxhT246Ym9vbGVhbjtcclxuXHJcbiAgICBQdWxzYXJCb3RvbihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5GaWNoYS5nZXRDb21wb25lbnQoJ0ZpY2hhJykuVmVyVm9sYXIoKSkgdGhpcy5GaWNoYS5nZXRDb21wb25lbnQoJ0ZpY2hhJykuTW92ZXIodGhpcy5WZWxvY2lkYWRCYXNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5CYXNlLnNldFBvc2l0aW9uKHRoaXMuQmFzZS5nZXRQb3NpdGlvbigpLnggKyB0aGlzLlZlbG9jaWRhZEJhc2UsIHRoaXMuQmFzZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLkZpY2hhLmdldENvbXBvbmVudCgnRmljaGEnKS5WZXJWb2xhcigpKSB0aGlzLkZpY2hhLmdldENvbXBvbmVudCgnRmljaGEnKS5Nb3ZlcigtdGhpcy5WZWxvY2lkYWRCYXNlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJhc2Uuc2V0UG9zaXRpb24odGhpcy5CYXNlLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuVmVsb2NpZGFkQmFzZSwgdGhpcy5CYXNlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuRmljaGEuZ2V0Q29tcG9uZW50KCdGaWNoYScpLlBlZ2FkbygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBvc0Jhc2VYKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQmFzZS5nZXRQb3NpdGlvbigpLng7XHJcbiAgICB9XHJcblxyXG4gICAgUG9zQmFzZVkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5CYXNlLmdldFBvc2l0aW9uKCkueTtcclxuICAgIH1cclxuXHJcbiAgICBWZXJWZWxvY2lkYWRGaWNoYSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLlZlbG9jaWRhZEZpY2hhO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWFyTmF2ZSgpe1xyXG5cclxuICAgICAgICBsZXQgTnVldmFOYXZlID0gY2MuaW5zdGFudGlhdGUodGhpcy5OYXZlKTtcclxuXHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICB2YXIgcmFuZFkgPSAwO1xyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkqIC00MDApICArIDQwMDtcclxuICAgICAgICByYW5kWSA9IChNYXRoLnJhbmRvbSgpKiAtMzAwKSAgKyAzMDA7XHJcblxyXG4gICAgICAgIE51ZXZhTmF2ZS5zZXRQb3NpdGlvbihyYW5kWCAscmFuZFkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChOdWV2YU5hdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnRyb2xWaWRhcygpe1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnZpZGFzIC09IDE7XHJcbiAgICAgICAgdGhpcy5DYXJ0ZWxWaWRhLnN0cmluZyA9ICdWaWRhczogJysgdGhpcy5wbGF5ZXJ2aWRhcy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJ2aWRhcyA9PSAwKSB0aGlzLlBlcmRpbygpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnRyb2xQdW50YWplKCl7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU2NvcmUgKz0gMTAwO1xyXG4gICAgICAgIHRoaXMuQ2FydGVsUHVudGFqZS5zdHJpbmcgPSAnUHVudGFqZTogJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5OdW1Fc2NlbmEgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTY29yZSA9PSA1MDApIHRoaXMuR2FubygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlICBpZiAodGhpcy5OdW1Fc2NlbmEgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTY29yZSA9PSAxMDAwKSB0aGlzLkdhbm8oKTtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBDb250cm9sVGllbXBvKCl7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyVGllbXBvICs9IDE7XHJcbiAgICAgICAgdGhpcy5DYXJ0ZWxUaWVtcG8uc3RyaW5nID0gJ1RpZW1wbzogJysgdGhpcy5wbGF5ZXJUaWVtcG8udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTnVtRXNjZW5hID09IDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyVGllbXBvID09IDQwKSB0aGlzLlBlcmRpbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlICBpZiAodGhpcy5OdW1Fc2NlbmEgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJUaWVtcG8gPT0gNjApIHRoaXMuUGVyZGlvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgIGlmICh0aGlzLk51bUVzY2VuYSA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclRpZW1wbyA9PSA2MCkgdGhpcy5HYW5vKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBlcmRpbygpe1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLkZpbGVUWFRQdW50YWplLnRleHQgPSAgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuRmlsZVRYVE5pdmVsLnRleHQgPSAgdGhpcy5OdW1Fc2NlbmEudG9TdHJpbmcoKTsgXHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNvbmlkb0xvc2UsZmFsc2UpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1BpZXJkbycpO1xyXG4gICAgfVxyXG5cclxuICAgIEdhbm8oKXtcclxuXHJcbiAgICAgICAgdGhpcy5OdW1Fc2NlbmErKztcclxuICAgICAgICB0aGlzLkZpbGVUWFRQdW50YWplLnRleHQgPSAgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuRmlsZVRYVE5pdmVsLnRleHQgPSAgdGhpcy5OdW1Fc2NlbmEudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvV2luLGZhbHNlKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW5vJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLk11c2ljYSx0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5UaW1lckp1ZWdvID0gMDtcclxuICAgICAgICB0aGlzLlRpbWVyTmF2ZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuVGltZXJPYmpldGl2byA9IDA7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllcnZpZGFzID0gMztcclxuICAgICAgICB0aGlzLnBsYXllclRpZW1wbyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuVGltZXJQYW50YWxsYU9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsZVRYVE5pdmVsLnVybCA9IGNjLnVybC5yYXcoXCJhc3NldHMvT3RoZXJzL05pdmVsLnR4dFwiKTtcclxuICAgICAgICBpZiAodGhpcy5GaWxlVFhUTml2ZWwudG9TdHJpbmcoKSA9PSAnNCcpIHRoaXMuRmlsZVRYVE5pdmVsLnRleHQgPSAgJzEnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5GaWxlVFhUTml2ZWwudG9TdHJpbmcoKSA9PSAnMScpIHtcclxuICAgICAgICAgICAgdGhpcy5WZWxvY2lkYWRGaWNoYSA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMuVmVsb2NpZGFkQmFzZSA9IDE1O1xyXG4gICAgICAgICAgICB0aGlzLk51bUVzY2VuYSA9IDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5PYmpldGl2bzIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuRmlsZVRYVE5pdmVsLnRvU3RyaW5nKCkgPT0gJzInKXtcclxuICAgICAgICAgICAgdGhpcy5WZWxvY2lkYWRGaWNoYSA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMuVmVsb2NpZGFkQmFzZSA9IDIwO1xyXG4gICAgICAgICAgICB0aGlzLk51bUVzY2VuYSA9IDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuT2JqZXRpdm8yLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuRmlsZVRYVE5pdmVsLnRvU3RyaW5nKCkgPT0gJzMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmVsb2NpZGFkRmljaGEgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5WZWxvY2lkYWRCYXNlID0gMjI7XHJcbiAgICAgICAgICAgIHRoaXMuTnVtRXNjZW5hID0gMztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuT2JqZXRpdm8xLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5PYmpldGl2bzIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ2FydGVsTml2ZWwuc3RyaW5nID0gJ05pdmVsOiAnICsgdGhpcy5OdW1Fc2NlbmE7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLlB1bHNhckJvdG9uLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5UaW1lck5hdmVzID49IDUpe1xyXG4gICAgICAgICAgICB0aGlzLkNyZWFyTmF2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlRpbWVyTmF2ZXMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVGltZXJKdWVnbyA+PSAxICYmIHRoaXMuVGltZXJQYW50YWxsYU9uKXtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9sVGllbXBvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJKdWVnbyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLlRpbWVyT2JqZXRpdm8gPj0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMuT2JqZXRpdm8xLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5PYmpldGl2bzIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLk9iamV0aXZvMy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJQYW50YWxsYU9uID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5UaW1lck9iamV0aXZvICs9IGR0O1xyXG4gICAgICAgIHRoaXMuVGltZXJKdWVnbyArPSBkdDtcclxuICAgICAgICB0aGlzLlRpbWVyTmF2ZXMgKz0gZHQ7XHJcbiAgICB9XHJcbn1cclxuIl19