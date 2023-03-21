"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Slots = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
var Slots = /** @class */ (function (_super) {
    __extends(Slots, _super);
    function Slots(parNombre, parJugadores, parApuestaMin, parMaquinaE, parApuesta) {
        var _this = _super.call(this, parNombre, parJugadores, parApuestaMin) || this;
        _this.maquinaEncendida = parMaquinaE;
        _this.apuesta = parApuesta;
        return _this;
    }
    Slots.prototype.setMaquinaE = function (parMaquinaE) {
        this.maquinaEncendida = parMaquinaE;
    };
    Slots.prototype.getMaquinaE = function () {
        return this.maquinaEncendida;
    };
    Slots.prototype.setApuesta = function (parApuesta) {
        this.apuesta = parApuesta;
    };
    Slots.prototype.getApuesta = function () {
        return this.apuesta;
    };
    return Slots;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Slots = Slots;
