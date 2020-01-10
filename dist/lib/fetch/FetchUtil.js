"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_decorators_1 = require("core-decorators");
var merge_1 = __importDefault(require("lodash/merge"));
var typings_1 = require("./typings");
var InterceptorManager_1 = __importDefault(require("./InterceptorManager"));
var FetchUtil = /** @class */ (function () {
    function FetchUtil(config) {
        /**
         * @description 请求方法
         */
        this.RequestMethod = typings_1.ERequestMethod;
        this.defaults = config;
        this.interceptors = {
            request: new InterceptorManager_1.default(),
            response: new InterceptorManager_1.default()
        };
    }
    /**
     * @description init config
     */
    FetchUtil.prototype.initConfig = function (config) {
        var config2 = merge_1.default(this.defaults, config);
        if (!config2.method) {
            config2.method = typings_1.ERequestMethod.GET;
        }
        if (!typings_1.ERequestMethod[config2.method]) {
            throw new Error("Request type " + config2.method + " does not exist");
        }
        if (!config2.url) {
            throw new Error("Request URL cannot be empty");
        }
        /**
         * 设置 headers 为 Headers 对象
         */
        config2.headers = new Headers(config.headers);
        if (config2.params) {
            var url = config2.url;
            var param = this.parseParamKey(config2.params);
            if (url && url.indexOf("?") !== -1) {
                url += "&" + param;
            }
            else {
                url += "?" + param;
            }
            config2.url = url;
        }
        return config;
    };
    /**
     * @description URL参数编码
     */
    FetchUtil.prototype.parseParamKey = function (param, key) {
        var paramStr = "";
        if (["string", "number", "boolean"].indexOf(typeof param) !== -1) {
            paramStr += "&" + key + "=" + encodeURIComponent(param);
        }
        else {
            for (var i in param) {
                if (param.hasOwnProperty(i)) {
                    var element = param[i];
                    var k = key == null ? i : key + (param instanceof Array ? "" : "." + i);
                    paramStr += "&" + this.parseParamKey(element, k);
                }
            }
        }
        return paramStr.substr(1);
    };
    /**
     * @description feth request请求
     */
    FetchUtil.prototype.request = function (config) {
        var config2 = this.initConfig(config);
        var chain = [this.dispatchRequest, undefined];
        var promise = Promise.resolve(config2);
        this.interceptors.request.forEach(function (interceptor) {
            if (interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            }
        });
        this.interceptors.response.forEach(function (interceptor) {
            if (interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            }
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return Promise.race([promise, new Promise(function (resolve, reject) {
                var timeout = config.timeout !== undefined ? config.timeout : 5000;
                var start = 0;
                var timer;
                var step = function (timestamp) {
                    if (!start) {
                        start = timestamp;
                    }
                    var progress = timestamp - start;
                    if (progress > timeout) {
                        // 终止请求
                        // controller.abort();
                        cancelAnimationFrame(timer);
                        var err = new Error('请求超时');
                        err.code = 500;
                        reject(err);
                    }
                    else {
                        timer = requestAnimationFrame(step);
                    }
                };
                if (timeout) {
                    timer = requestAnimationFrame(step);
                }
            })]);
    };
    FetchUtil.prototype.dispatchRequest = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, baseURL, body, headers, transformRequest, _b, timeout, responseType, payload;
            return __generator(this, function (_c) {
                url = config.url, _a = config.baseURL, baseURL = _a === void 0 ? '' : _a, body = config.body, headers = config.headers, transformRequest = config.transformRequest, _b = config.timeout, timeout = _b === void 0 ? 1000 * 5 : _b, responseType = config.responseType, payload = __rest(config, ["url", "baseURL", "body", "headers", "transformRequest", "timeout", "responseType"]);
                if (url) {
                    throw new Error('Request URL cannot be empty');
                }
                return [2 /*return*/, fetch(baseURL + url, __assign(__assign({}, payload), { body: body, headers: new Headers(headers) })).then(function (response) {
                        if (response.ok) {
                            if (responseType === typings_1.EResponseType.json) {
                                return response.json();
                            }
                            else if (responseType === typings_1.EResponseType.text) {
                                return response.text();
                            }
                            else if (responseType === typings_1.EResponseType.arraybuffer) {
                                return response.arrayBuffer();
                            }
                            else if (responseType === typings_1.EResponseType.blob) {
                                return response.blob();
                            }
                            else if (responseType === typings_1.EResponseType.formData) {
                                return response.formData();
                            }
                            return response.json();
                        }
                        var error = new Error();
                        error.res = response.json();
                        throw error;
                    })];
            });
        });
    };
    FetchUtil = __decorate([
        core_decorators_1.autobind
    ], FetchUtil);
    return FetchUtil;
}());
exports.default = FetchUtil;
//# sourceMappingURL=FetchUtil.js.map