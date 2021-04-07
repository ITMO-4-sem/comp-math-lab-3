import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class ThirdFunctionContainer implements FunctionContainer {

    getFunctionRepresentation(): string {
        return "sin(x)";
    }

    calc(x: number): number {
        return (
            Math.sin(x)
        );
    }
}