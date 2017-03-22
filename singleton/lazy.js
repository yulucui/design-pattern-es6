"use strict";
exports.__esModule = true;
/**
 * 懒汉式
 */
var Lazy = (function () {
    function Lazy() {
    }
    //js不存在线程是否安全
    Lazy.getInstance = function () {
        if (!this.instance)
            this.instance = new Lazy();
        return this.instance;
    };
    return Lazy;
}());
exports.Lazy = Lazy;
