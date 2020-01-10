"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_decorators_1 = require("core-decorators");
var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.handlers = [];
    }
    /**
     * @description 添加路由拦截器
     * @param {Function} fulfilled 成功回调
     * @param {Function} rejected 拦截器失败回调
     */
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    };
    /**
     * @description 从堆栈中移除拦截器
     * @param {number} id use返回的id
     */
    InterceptorManager.prototype.eject = function (id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    };
    /**
     * @description 遍历所有注册的拦截器
     * @param {Function} fn 要为每个拦截器调用的函数
     */
    InterceptorManager.prototype.forEach = function (fn) {
        this.handlers.forEach(function (h) {
            if (h !== null) {
                fn(h);
            }
        });
    };
    InterceptorManager = __decorate([
        core_decorators_1.autobind
    ], InterceptorManager);
    return InterceptorManager;
}());
exports.default = InterceptorManager;
//# sourceMappingURL=InterceptorManager.js.map