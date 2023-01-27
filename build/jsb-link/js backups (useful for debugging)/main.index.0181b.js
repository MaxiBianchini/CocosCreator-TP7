window.__require = function t(e, o, i) {
function n(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var l = o[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return n(e[c][1][t] || t);
}, l, l.exports, t, e, o, i);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
return n;
}({
BotonInstrucciones: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d94e79W7+ZHaJW3VecSa+VH", "BotonInstrucciones");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Instrucciones");
this.node.on("touchstart", function() {
cc.director.loadScene("Instrucciones");
});
};
e.prototype.start = function() {};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
BotonJugar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "265ebtDbfdBCrBMnbVHMwWW", "BotonJugar");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Juego");
this.node.on("touchstart", function() {
cc.director.loadScene("Juego");
});
};
e.prototype.start = function() {};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
BotonMenu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bb830GVK55Du5E/dztQ9rd4", "BotonMenu");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Menu");
this.node.on("touchstart", function() {
cc.director.loadScene("Menu");
});
};
e.prototype.start = function() {};
return r([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Ficha: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7c3ddJhSdlPm5EKNo9S8I27", "Ficha");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SonidoGolpe = null;
return e;
}
e.prototype.VerVolar = function() {
return this.Volar;
};
e.prototype.onCollisionEnter = function(t) {
0 == t.tag && (this.DireccionX *= -1);
if (1 == t.tag || 2 == t.tag) {
if (2 == t.tag && this.Pegate) {
this.Volar = !1;
this.Pegate = !1;
}
this.DireccionY *= -1;
}
cc.audioEngine.playEffect(this.SonidoGolpe, !1);
};
e.prototype.Pegado = function() {
this.Volar ? this.Pegate = !0 : this.Volar = !0;
};
e.prototype.Mover = function(t) {
this.node.setPosition(this.node.getPosition().x + t, this.node.getPosition().y);
};
e.prototype.onLoad = function() {
this.Volar = !1;
this.Velocidad = this.node.parent.getComponent("Game").VerVelocidadFicha();
this.DireccionX = 1;
this.DireccionY = 1;
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Volar && this.node.setPosition(this.node.getPosition().x + this.DireccionX * this.Velocidad, this.node.getPosition().y + this.DireccionY * this.Velocidad);
if (this.node.getPosition().y < -320) {
this.node.setPosition(this.node.parent.getComponent("Game").PosBaseX(), this.node.parent.getComponent("Game").PosBaseY() + 50);
this.node.parent.getComponent("Game").ControlVidas();
this.DireccionY *= -1;
this.Volar = !1;
}
};
r([ a(cc.AudioClip) ], e.prototype, "SonidoGolpe", void 0);
return r([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "242d1Lp+V1FXZcH1rK6MByW", "Game");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Ficha = null;
e.Base = null;
e.Nave = null;
e.CartelVida = null;
e.CartelPuntaje = null;
e.CartelTiempo = null;
e.CartelNivel = null;
e.Objetivo1 = null;
e.Objetivo2 = null;
e.Objetivo3 = null;
e.SonidoWin = null;
e.SonidoLose = null;
e.Musica = null;
e.FileTXTPuntaje = null;
e.FileTXTNivel = null;
return e;
}
e.prototype.PulsarBoton = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.right:
this.Ficha.getComponent("Ficha").VerVolar() || this.Ficha.getComponent("Ficha").Mover(this.VelocidadBase);
this.Base.setPosition(this.Base.getPosition().x + this.VelocidadBase, this.Base.getPosition().y);
break;

case cc.macro.KEY.left:
this.Ficha.getComponent("Ficha").VerVolar() || this.Ficha.getComponent("Ficha").Mover(-this.VelocidadBase);
this.Base.setPosition(this.Base.getPosition().x - this.VelocidadBase, this.Base.getPosition().y);
break;

case cc.macro.KEY.space:
this.Ficha.getComponent("Ficha").Pegado();
}
};
e.prototype.PosBaseX = function() {
return this.Base.getPosition().x;
};
e.prototype.PosBaseY = function() {
return this.Base.getPosition().y;
};
e.prototype.VerVelocidadFicha = function() {
return this.VelocidadFicha;
};
e.prototype.CrearNave = function() {
var t, e, o = cc.instantiate(this.Nave);
t = -400 * Math.random() + 400;
e = -300 * Math.random() + 300;
o.setPosition(t, e);
this.node.addChild(o);
};
e.prototype.ControlVidas = function() {
this.playervidas -= 1;
this.CartelVida.string = "Vidas: " + this.playervidas.toString();
0 == this.playervidas && this.Perdio();
};
e.prototype.ControlPuntaje = function() {
this.playerScore += 100;
this.CartelPuntaje.string = "Puntaje: " + this.playerScore.toString();
1 == this.NumEscena ? 500 == this.playerScore && this.Gano() : 2 == this.NumEscena && 1e3 == this.playerScore && this.Gano();
};
e.prototype.ControlTiempo = function() {
this.playerTiempo += 1;
this.CartelTiempo.string = "Tiempo: " + this.playerTiempo.toString();
1 == this.NumEscena ? 40 == this.playerTiempo && this.Perdio() : 2 == this.NumEscena ? 60 == this.playerTiempo && this.Perdio() : 3 == this.NumEscena && 60 == this.playerTiempo && this.Gano();
};
e.prototype.Perdio = function() {
this.FileTXTPuntaje.text = this.playerScore.toString();
this.FileTXTNivel.text = this.NumEscena.toString();
cc.audioEngine.stopAllEffects();
cc.audioEngine.playEffect(this.SonidoLose, !1);
cc.director.loadScene("Pierdo");
};
e.prototype.Gano = function() {
this.NumEscena++;
this.FileTXTPuntaje.text = this.playerScore.toString();
this.FileTXTNivel.text = this.NumEscena.toString();
cc.audioEngine.stopAllEffects();
cc.audioEngine.playEffect(this.SonidoWin, !1);
cc.director.loadScene("Gano");
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
cc.audioEngine.playEffect(this.Musica, !0);
this.TimerJuego = 0;
this.TimerNaves = 0;
this.TimerObjetivo = 0;
this.playerScore = 0;
this.playervidas = 3;
this.playerTiempo = 0;
this.TimerPantallaOn = !1;
this.FileTXTNivel.url = cc.url.raw("assets/Others/Nivel.txt");
"4" == this.FileTXTNivel.toString() && (this.FileTXTNivel.text = "1");
if ("1" == this.FileTXTNivel.toString()) {
this.VelocidadFicha = 5;
this.VelocidadBase = 15;
this.NumEscena = 1;
this.Objetivo1.enabled = !0;
this.Objetivo2.enabled = !1;
this.Objetivo3.enabled = !1;
} else if ("2" == this.FileTXTNivel.toString()) {
this.VelocidadFicha = 7;
this.VelocidadBase = 20;
this.NumEscena = 2;
this.Objetivo1.enabled = !1;
this.Objetivo2.enabled = !0;
this.Objetivo3.enabled = !1;
} else if ("3" == this.FileTXTNivel.toString()) {
this.VelocidadFicha = 10;
this.VelocidadBase = 22;
this.NumEscena = 3;
this.Objetivo1.enabled = !1;
this.Objetivo2.enabled = !1;
this.Objetivo3.enabled = !0;
}
this.CartelNivel.string = "Nivel: " + this.NumEscena;
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.PulsarBoton, this);
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
if (this.TimerNaves >= 5) {
this.CrearNave();
this.TimerNaves = 0;
}
if (this.TimerJuego >= 1 && this.TimerPantallaOn) {
this.ControlTiempo();
this.TimerJuego = 0;
}
if (this.TimerObjetivo >= 4) {
this.Objetivo1.enabled = !1;
this.Objetivo2.enabled = !1;
this.Objetivo3.enabled = !1;
this.TimerPantallaOn = !0;
}
this.TimerObjetivo += t;
this.TimerJuego += t;
this.TimerNaves += t;
};
r([ a(cc.Node) ], e.prototype, "Ficha", void 0);
r([ a(cc.Node) ], e.prototype, "Base", void 0);
r([ a(cc.Prefab) ], e.prototype, "Nave", void 0);
r([ a(cc.Label) ], e.prototype, "CartelVida", void 0);
r([ a(cc.Label) ], e.prototype, "CartelPuntaje", void 0);
r([ a(cc.Label) ], e.prototype, "CartelTiempo", void 0);
r([ a(cc.Label) ], e.prototype, "CartelNivel", void 0);
r([ a(cc.Label) ], e.prototype, "Objetivo1", void 0);
r([ a(cc.Label) ], e.prototype, "Objetivo2", void 0);
r([ a(cc.Label) ], e.prototype, "Objetivo3", void 0);
r([ a(cc.AudioClip) ], e.prototype, "SonidoWin", void 0);
r([ a(cc.AudioClip) ], e.prototype, "SonidoLose", void 0);
r([ a(cc.AudioClip) ], e.prototype, "Musica", void 0);
r([ a(cc.TextAsset) ], e.prototype, "FileTXTPuntaje", void 0);
r([ a(cc.TextAsset) ], e.prototype, "FileTXTNivel", void 0);
return r([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
MenuFinal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5c60enYtr1OLaD3BFjA2spo", "MenuFinal");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Puntaje = null;
e.FileTXTPuntaje = null;
return e;
}
e.prototype.onLoad = function() {
this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
this.Puntaje.string = "Puntaje: " + this.FileTXTPuntaje;
};
e.prototype.start = function() {};
r([ a(cc.Label) ], e.prototype, "Puntaje", void 0);
r([ a(cc.TextAsset) ], e.prototype, "FileTXTPuntaje", void 0);
return r([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Nave: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ab95datADxC2K7JUXXSuP4M", "Nave");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SonidoExplotion = null;
return e;
}
e.prototype.onCollisionEnter = function(t) {
if (0 == t.tag) {
this.Direccion *= -1;
this.node.scaleY *= -1;
this.node.scaleX *= -1;
}
if (3 == t.tag) {
this.node.parent.getComponent("Game").ControlPuntaje();
cc.audioEngine.playEffect(this.SonidoExplotion, !1);
this.node.destroy();
}
};
e.prototype.onLoad = function() {
this.Direccion = -1;
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.node.setPosition(this.node.getPosition().x + 5 * this.Direccion, this.node.getPosition().y);
};
r([ a(cc.AudioClip) ], e.prototype, "SonidoExplotion", void 0);
return r([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "BotonInstrucciones", "BotonJugar", "BotonMenu", "Ficha", "Game", "MenuFinal", "Nave" ]);