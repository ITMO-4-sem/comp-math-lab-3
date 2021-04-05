import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResult} from "../results/MethodResult";

export class SimpsonMethod extends Method {
    calculate(input: MethodInput, funcCont: FunctionContainer): MethodResult {
        return new MethodResult(1, 1);
    }

}