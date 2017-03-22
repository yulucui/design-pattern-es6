"use strict";
exports.__esModule = true;
/**
 * 饿汉式
 */
var Hunger = (function () {
    function Hunger() {
    }
    Hunger.getInstance = function () {
        return this.instance;
    };
    return Hunger;
}());
Hunger.instance = new Hunger();
exports.Hunger = Hunger;
