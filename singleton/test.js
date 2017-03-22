"use strict";
exports.__esModule = true;
var hunger_1 = require("./hunger");
var lazy_1 = require("./lazy");
//返回true 说明是同一个实例
console.log(hunger_1.Hunger.getInstance() == hunger_1.Hunger.getInstance());
console.log(lazy_1.Lazy.getInstance() == lazy_1.Lazy.getInstance());
