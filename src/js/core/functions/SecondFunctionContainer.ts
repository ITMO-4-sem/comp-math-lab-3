import {FunctionContainer} from "./FunctionContainer";

/**
 *
 */
export class SecondFunctionContainer implements FunctionContainer {



    getFunctionRepresentation(): string {
        return "x^3  -  x  +  4";
    }

    calc(x: number): number {
        return (
            Math.pow(x, 3) - x + 4
        );
    }

    calcFirstDerivative(x: number): number {
        return (
            3 * Math.pow(x, 2) - 1
        );
    }

    calcSecondDerivative(x: number): number {
        return (
            6 * x
        );
    }

    calcFI(x: number): number {
        return 12/11 * x - 1/11 * Math.pow(x, 3) - 4/11;
    }


}