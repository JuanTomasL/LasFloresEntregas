"use strict";
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(pNombre, pJugadores, pApuestaMin) {
        this.nombre = pNombre;
        this.jugadores = pJugadores;
        this.apuestaMin = pApuestaMin;
    }
    JuegoDeCasino.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    JuegoDeCasino.prototype.getNombre = function () {
        return this.nombre;
    };
    JuegoDeCasino.prototype.setJugadores = function (pJugadores) {
        this.jugadores = pJugadores;
    };
    JuegoDeCasino.prototype.getJugadores = function () {
        return this.jugadores;
    };
    JuegoDeCasino.prototype.setApuestaMin = function (pApuestaMin) {
        this.apuestaMin = pApuestaMin;
    };
    JuegoDeCasino.prototype.getApuestaMin = function () {
        return this.apuestaMin;
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
