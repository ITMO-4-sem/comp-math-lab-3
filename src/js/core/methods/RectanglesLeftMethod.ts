import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResult} from "../results/MethodResult";


export class RectanglesLeftMethod extends Method {
    calculate(input: MethodInput, fc: FunctionContainer): MethodResult {

        let n: number = RectanglesLeftMethod.initialN / 2;
        let valueN: number | null = null;
        let valueNPrev: number | null = null;
        const accuracy: number = input.getAccuracy();

        const a: number = input.getA();
        const b: number = input.getB();
        let h: number;


        do {

            n *= 2;

            valueNPrev = valueN;
            valueN = 0;

            h = ( b - a ) / n;

            for ( let x = a; x < b; x += h) {
                valueN += fc.calc( x );
            }

            valueN *= h;

        } while ( ! this.isAccuracyProficient(valueN, valueNPrev, accuracy) );


        return new MethodResult(valueN, n);
    }

}