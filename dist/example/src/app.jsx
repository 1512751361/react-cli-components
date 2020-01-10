"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var lib_1 = require("../../lib");
var App = function () { return <lib_1.ReactDemo />; };
react_dom_1.render(<App />, document.getElementById('root'));
