
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/BotonInstrucciones');
require('./assets/Scripts/BotonJugar');
require('./assets/Scripts/BotonMenu');
require('./assets/Scripts/Ficha');
require('./assets/Scripts/Game');
require('./assets/Scripts/MenuFinal');
require('./assets/Scripts/Nave');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BotonInstrucciones.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd94e79W7+ZHaJW3VecSa+VH', 'BotonInstrucciones');
// Scripts/BotonInstrucciones.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Instrucciones');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Instrucciones');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25JbnN0cnVjY2lvbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWVBLENBQUM7SUFiRyx5QkFBTSxHQUFOO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDO1lBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FlNUI7SUFBRCxlQUFDO0NBZkQsQUFlQyxDQWZxQyxFQUFFLENBQUMsU0FBUyxHQWVqRDtrQkFmb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbnN0cnVjY2lvbmVzJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5zdHJ1Y2Npb25lcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Nave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab95datADxC2K7JUXXSuP4M', 'Nave');
// Scripts/Nave.ts

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
        _this.SonidoExplotion = null;
        return _this;
    }
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 0) {
            this.Direccion *= -1;
            this.node.scaleY *= -1;
            this.node.scaleX *= -1;
        }
        if (otherCollider.tag == 3) {
            this.node.parent.getComponent('Game').ControlPuntaje();
            cc.audioEngine.playEffect(this.SonidoExplotion, false);
            this.node.destroy();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.Direccion = -1;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.node.setPosition(this.node.getPosition().x + (this.Direccion * 5), this.node.getPosition().y);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoExplotion", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmF2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNDQztRQW5DRyxxQkFBZSxHQUFnQixJQUFJLENBQUM7O0lBbUN4QyxDQUFDO0lBL0JHLG1DQUFnQixHQUFoQixVQUFpQixhQUFhLEVBQUUsWUFBWTtRQUV4QyxJQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBRXZCLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQWxDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNhO0lBSG5CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQzVCO0lBQUQsZUFBQztDQXRDRCxBQXNDQyxDQXRDcUMsRUFBRSxDQUFDLFNBQVMsR0FzQ2pEO2tCQXRDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9FeHBsb3Rpb246Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBEaXJlY2Npb246bnVtYmVyO1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXJDb2xsaWRlciwgc2VsZkNvbGxpZGVyKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkRpcmVjY2lvbiAqPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSAqPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDMpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuQ29udHJvbFB1bnRhamUoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNvbmlkb0V4cGxvdGlvbixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5EaXJlY2Npb24gPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAodGhpcy5EaXJlY2Npb24gKiA1KSwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MenuFinal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c60enYtr1OLaD3BFjA2spo', 'MenuFinal');
// Scripts/MenuFinal.ts

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
        _this.Puntaje = null;
        _this.FileTXTPuntaje = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
        this.Puntaje.string = 'Puntaje: ' + this.FileTXTPuntaje;
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Puntaje", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTPuntaje", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudUZpbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbEJHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsb0JBQWMsR0FBZ0IsSUFBSSxDQUFDOztRQWNuQyxpQkFBaUI7SUFDckIsQ0FBQztJQWJHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRSxXQUFXLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1k7SUFObEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFCNUI7SUFBRCxlQUFDO0NBckJELEFBcUJDLENBckJxQyxFQUFFLENBQUMsU0FBUyxHQXFCakQ7a0JBckJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgUHVudGFqZTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHRBc3NldClcclxuICAgIEZpbGVUWFRQdW50YWplOmNjLlRleHRBc3NldCA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkZpbGVUWFRQdW50YWplLnVybCA9IGNjLnVybC5yYXcoXCJhc3NldHMvUHVudGFqZS50eHRcIik7XHJcbiAgICAgICAgdGhpcy5QdW50YWplLnN0cmluZyA9J1B1bnRhamU6ICcrIHRoaXMuRmlsZVRYVFB1bnRhamU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BotonJugar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '265ebtDbfdBCrBMnbVHMwWW', 'BotonJugar');
// Scripts/BotonJugar.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Juego');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Juego');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25KdWdhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFlQSxDQUFDO0lBYkcseUJBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVpnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZTVCO0lBQUQsZUFBQztDQWZELEFBZUMsQ0FmcUMsRUFBRSxDQUFDLFNBQVMsR0FlakQ7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnSnVlZ28nKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdKdWVnbycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BotonMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb830GVK55Du5E/dztQ9rd4', 'BotonMenu');
// Scripts/BotonMenu.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Menu');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Menu');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25NZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWVBLENBQUM7SUFiRyx5QkFBTSxHQUFOO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDO1lBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FlNUI7SUFBRCxlQUFDO0NBZkQsQUFlQyxDQWZxQyxFQUFFLENBQUMsU0FBUyxHQWVqRDtrQkFmb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdNZW51Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
