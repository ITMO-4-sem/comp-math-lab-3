"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MethodInput_1 = require("./core/inputs/MethodInput");
const RectanglesLeftMethod_1 = require("./core/methods/RectanglesLeftMethod");
const FirstFunctionContainer_1 = require("./core/functions/FirstFunctionContainer");
const RectanglesMiddleMethod_1 = require("./core/methods/RectanglesMiddleMethod");
const RectanglesRightMethod_1 = require("./core/methods/RectanglesRightMethod");
const TrapezoidsMethod_1 = require("./core/methods/TrapezoidsMethod");
const SimpsonMethod_1 = require("./core/methods/SimpsonMethod");
let input = new MethodInput_1.MethodInput(1, 400, 0.001);
let rectLeftMethod = new RectanglesLeftMethod_1.RectanglesLeftMethod();
let rectRightMethod = new RectanglesRightMethod_1.RectanglesRightMethod();
let rectMiddleMethod = new RectanglesMiddleMethod_1.RectanglesMiddleMethod();
let trapezoidsMethod = new TrapezoidsMethod_1.TrapezoidsMethod();
let simpsonMethod = new SimpsonMethod_1.SimpsonMethod();
let firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
let resLeft = rectLeftMethod.calculate(input, firstFuncCont);
// let resRight = rectRightMethod.calculate(input, firstFuncCont);
// let resMid = rectMiddleMethod.calculate(input, firstFuncCont);
//
// let resTrapezoids = trapezoidsMethod.calculate(input, firstFuncCont);
//
// let resSimpson = simpsonMethod.calculate(input, firstFuncCont);
console.log("rect LEFT: ", resLeft);
// console.log("rect Right: ", resRight);
// console.log("rect Middle: ", resMid);
//
// console.log("trapezoids: ", resTrapezoids);
//
// console.log("simpson: ", resSimpson);
// timer();
function timer() {
    let timer = setTimeout(() => {
        console.log("TIMEOUT");
    }, 3000);
    console.log("timer activated");
    // clearTimeout(timer);
    return;
}
//# sourceMappingURL=main.js.map