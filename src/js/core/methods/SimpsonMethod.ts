import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResult} from "../results/MethodResult";
import config from "./method.config";

export class SimpsonMethod extends Method {
    calculate(input: MethodInput, fc: FunctionContainer): MethodResult {
        let n: number = Method.initialN / 2;
        let valueN: number | null = null;
        let valueNPrev: number | null = null;
        const accuracy: number = input.getAccuracy();

        const a: number = input.getA();
        const b: number = input.getB();
        let h: number;

        let evenXFuncSum: number;
        let oddXFuncSum: number;
        let i;

        const startTime = Date.now();

        do {

            n *= 2;

            valueNPrev = valueN;
            valueN = 0;

            h = ( b - a ) / n;

            evenXFuncSum = 0;
            oddXFuncSum = 0;
            i = 1;

            for ( let x = a + h; x <= b - h; x += h) {
                if ( i % 2 == 0 ) { // y2, y4, etc...
                    evenXFuncSum += fc.calc(x);
                } else { // y1, y3, etc...
                    oddXFuncSum += fc.calc(x);
                }

                i++;
            }

            valueN = h/3 * ( fc.calc(a) + 4 * oddXFuncSum + 2 * evenXFuncSum + fc.calc(b));

            if (Date.now() - startTime >= config.maxTimeout) {
                throw Error("Превышено максимальное время вычисления. Желаемая точность не достигнута." +
                    "\nПоследние полученные значения:" +
                    `\n  значение интеграла:   ${valueN}` +
                    `\n  количество разбиений: ${n}`)
            }

        } while ( ! this.isAccuracyProficient(valueN, valueNPrev, accuracy) );


        return new MethodResult(valueN, n);
    }

}