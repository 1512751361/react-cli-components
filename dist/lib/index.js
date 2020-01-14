"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./components/demo");
exports.ReactDemo = demo_1.default;
// 非常简单的加法函数
function add(a, b) {
    return a + b;
}
exports.add = add;
var FetchUtil_1 = require("./fetch/FetchUtil");
exports.FetchUtil = FetchUtil_1.default;
var InterceptorManager_1 = require("./fetch/InterceptorManager");
exports.InterceptorManager = InterceptorManager_1.default;
