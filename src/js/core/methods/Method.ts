import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResult} from "../results/MethodResult";

/**
 *
 */
export abstract class Method {

    protected static readonly initialN: number = 4;

    abstract calculate(input: MethodInput, funcCont: FunctionContainer): MethodResult;

    protected isAccuracyProficient(valueN: number, valueNPrev: number | null, accuracy: number): boolean {
        if ( valueNPrev == null ) {
            return false;
        }
        return ( Math.abs(valueN - valueNPrev) <= accuracy );
    }
}