import {MethodInput} from "./core/inputs/MethodInput";
import {RectanglesLeftMethod} from "./core/methods/RectanglesLeftMethod";
import {FirstFunctionContainer} from "./core/functions/FirstFunctionContainer";

let input: MethodInput = new MethodInput(1, 2, 0.000000001);

let rectLeftMethod: RectanglesLeftMethod = new RectanglesLeftMethod();

let firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();


let res = rectLeftMethod.calculate(input, firstFuncCont);

console.log(res);