import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class FirstFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "x ^ 2";
    }

    calc(x: number): number {
        return (
            x * x
        );
    }
}