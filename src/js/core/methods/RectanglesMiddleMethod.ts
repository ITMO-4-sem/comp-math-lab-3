import {Method} from "./Method";
import {MethodInput} from "../inputs/MethodInput";
import {FunctionContainer} from "../functions/FunctionContainer";
import {MethodResult} from "../results/MethodResult";
import config from "./method.config";

export class RectanglesMiddleMethod extends Method {
    calculate(input: MethodInput, fc: FunctionContainer): MethodResult {
        let n: number = Method.initialN / 2;
        let valueN: number | null = null;
        let valueNPrev: number | null = null;
        const accuracy: number = input.getAccuracy();

        const a: number = input.getA();
        const b: number = input.getB();
        let h: number;

        const startTime = Date.now();

        do {

            n *= 2;

            valueNPrev = valueN;
            valueN = 0;

            h = (b - a) / n;

            for (let x = a + h / 2; x <= b - h / 2; x += h) {
                valueN += fc.calc(x);
            }

            valueN *= h;

            if (Date.now() - startTime >= config.maxTimeout) {
                throw Error("Превышено максимальное время вычисления. Желаемая точность не достигнута." +
                    "\nПоследние полученные значения:" +
                    `\n  значение интеграла:   ${valueN}` +
                    `\n  количество разбиений: ${n}`)
            }

        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));

        return new MethodResult(valueN, n);

    }

}