"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pNameCasino, pJuegoSlot, pJuegoBj) {
        this.nombreCasino = pNameCasino;
        this.juegoSlot = pJuegoSlot;
        this.juegoBlj = pJuegoBj;
    }
    Casino.prototype.setNameCasino = function (pNameCasino) {
        this.nombreCasino = pNameCasino;
    };
    Casino.prototype.getNameCasino = function () {
        return this.nombreCasino;
    };
    Casino.prototype.setJuegoSlot = function (pJuegoSlot) {
        this.juegoSlot = pJuegoSlot;
    };
    Casino.prototype.getJuegoSlot = function () {
        return this.juegoSlot;
    };
    Casino.prototype.setJuegoBlJ = function (pJuegoBj) {
        this.juegoBlj = pJuegoBj;
    };
    Casino.prototype.getJuegoBlJ = function () {
        return this.juegoBlj;
    };
    return Casino;
}());
exports.Casino = Casino;
