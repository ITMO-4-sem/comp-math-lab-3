"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MethodInput_1 = require("./core/inputs/MethodInput");
const RectanglesLeftMethod_1 = require("./core/methods/RectanglesLeftMethod");
const FirstFunctionContainer_1 = require("./core/functions/FirstFunctionContainer");
let input = new MethodInput_1.MethodInput(1, 2, 0.000000001);
let rectLeftMethod = new RectanglesLeftMethod_1.RectanglesLeftMethod();
let firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
let res = rectLeftMethod.calculate(input, firstFuncCont);
console.log(res);
//# sourceMappingURL=main.js.map