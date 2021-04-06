import {MethodInput} from "./core/inputs/MethodInput";
import {RectanglesLeftMethod} from "./core/methods/RectanglesLeftMethod";
import {FirstFunctionContainer} from "./core/functions/FirstFunctionContainer";
import {RectanglesMiddleMethod} from "./core/methods/RectanglesMiddleMethod";
import {RectanglesRightMethod} from "./core/methods/RectanglesRightMethod";
import {TrapezoidsMethod} from "./core/methods/TrapezoidsMethod";
import {SimpsonMethod} from "./core/methods/SimpsonMethod";

let input: MethodInput = new MethodInput(1, 400, 0.001);


let rectLeftMethod: RectanglesLeftMethod = new RectanglesLeftMethod();
let rectRightMethod: RectanglesRightMethod = new RectanglesRightMethod();
let rectMiddleMethod: RectanglesMiddleMethod = new RectanglesMiddleMethod();

let trapezoidsMethod: TrapezoidsMethod = new TrapezoidsMethod();

let simpsonMethod: SimpsonMethod = new SimpsonMethod();


let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();


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
        console.log("TIMEOUT")
    }, 3000);

    console.log("timer activated");
    // clearTimeout(timer);
    return;
}