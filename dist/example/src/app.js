"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var index_1 = require("../../lib/index");
console.log(index_1.ReactDemo);
var App = function () { return react_1.default.createElement(index_1.ReactDemo, null); };
react_dom_1.render(react_1.default.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map