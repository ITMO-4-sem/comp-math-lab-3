import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class SecondFunctionContainer implements FunctionContainer {



    getFunctionRepresentation(): string {
        return "x";
    }

    calc(x: number): number {
        return (
            x
        );
    }

}