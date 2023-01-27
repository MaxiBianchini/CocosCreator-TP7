
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Ficha.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRmljaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1RUM7UUFwRUcsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDOztJQW9FcEMsQ0FBQztJQXpERywyQkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBYSxFQUFFLFlBQVk7UUFFeEMsSUFBRyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDakQsSUFBRyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxTQUFTO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pKO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVyRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQW5FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBSGYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVFNUI7SUFBRCxlQUFDO0NBdkVELEFBdUVDLENBdkVxQyxFQUFFLENBQUMsU0FBUyxHQXVFakQ7a0JBdkVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb0dvbHBlOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgVm9sYXI6Ym9vbGVhbjtcclxuICAgIFBlZ2F0ZTpib29sZWFuO1xyXG5cclxuICAgIFZlbG9jaWRhZDpudW1iZXI7XHJcbiAgICBMYWRvOm51bWJlcjtcclxuXHJcbiAgICBEaXJlY2Npb25YOm51bWJlcjtcclxuICAgIERpcmVjY2lvblk6bnVtYmVyO1xyXG5cclxuICAgIFZlclZvbGFyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVm9sYXI7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLCBzZWxmQ29sbGlkZXIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDApIHRoaXMuRGlyZWNjaW9uWCAqPSAtMTtcclxuICAgIFxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDEgfHwgb3RoZXJDb2xsaWRlci50YWcgPT0gMikge1xyXG4gICAgICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAyICYmIHRoaXMuUGVnYXRlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVm9sYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUGVnYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5EaXJlY2Npb25ZICo9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNvbmlkb0dvbHBlLGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBQZWdhZG8oKXtcclxuICAgICAgICBpZih0aGlzLlZvbGFyKSB0aGlzLlBlZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSB0aGlzLlZvbGFyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBNb3ZlcihkaXJlY2Npb24pe1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgZGlyZWNjaW9uLCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuVm9sYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlZlbG9jaWRhZCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuVmVyVmVsb2NpZGFkRmljaGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5EaXJlY2Npb25YID0gMTtcclxuICAgICAgICB0aGlzLkRpcmVjY2lvblkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5Wb2xhcil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgKHRoaXMuRGlyZWNjaW9uWCAqIHRoaXMuVmVsb2NpZGFkKSwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSArICh0aGlzLkRpcmVjY2lvblkgKiB0aGlzLlZlbG9jaWRhZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkgPCAtMzIwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWUnKS5Qb3NCYXNlWCgpLCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLlBvc0Jhc2VZKCkgKyA1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuQ29udHJvbFZpZGFzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLkRpcmVjY2lvblkgKj0gLTE7IFxyXG4gICAgICAgICAgICB0aGlzLlZvbGFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==