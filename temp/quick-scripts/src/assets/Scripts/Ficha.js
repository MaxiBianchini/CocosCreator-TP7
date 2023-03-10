"use strict";
cc._RF.push(module, '7c3ddJhSdlPm5EKNo9S8I27', 'Ficha');
// Scripts/Ficha.ts

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
        _this.SonidoGolpe = null;
        return _this;
    }
    NewClass.prototype.VerVolar = function () {
        return this.Volar;
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 0)
            this.DireccionX *= -1;
        if (otherCollider.tag == 1 || otherCollider.tag == 2) {
            if (otherCollider.tag == 2 && this.Pegate) {
                this.Volar = false;
                this.Pegate = false;
            }
            this.DireccionY *= -1;
        }
        cc.audioEngine.playEffect(this.SonidoGolpe, false);
    };
    NewClass.prototype.Pegado = function () {
        if (this.Volar)
            this.Pegate = true;
        else
            this.Volar = true;
    };
    NewClass.prototype.Mover = function (direccion) {
        this.node.setPosition(this.node.getPosition().x + direccion, this.node.getPosition().y);
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.Volar = false;
        this.Velocidad = this.node.parent.getComponent('Game').VerVelocidadFicha();
        this.DireccionX = 1;
        this.DireccionY = 1;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this.Volar) {
            this.node.setPosition(this.node.getPosition().x + (this.DireccionX * this.Velocidad), this.node.getPosition().y + (this.DireccionY * this.Velocidad));
        }
        if (this.node.getPosition().y < -320) {
            this.node.setPosition(this.node.parent.getComponent('Game').PosBaseX(), this.node.parent.getComponent('Game').PosBaseY() + 50);
            this.node.parent.getComponent('Game').ControlVidas();
            this.DireccionY *= -1;
            this.Volar = false;
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoGolpe", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();