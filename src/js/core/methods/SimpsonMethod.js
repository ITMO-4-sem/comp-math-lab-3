"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpsonMethod = void 0;
const Method_1 = require("./Method");
const MethodResult_1 = require("../results/MethodResult");
const method_config_1 = __importDefault(require("./method.config"));
class SimpsonMethod extends Method_1.Method {
    calculate(input, fc) {
        let n = Method_1.Method.initialN / 2;
        let valueN = null;
        let valueNPrev = null;
        const accuracy = input.getAccuracy();
        const a = input.getA();
        const b = input.getB();
        let h;
        let evenXFuncSum;
        let oddXFuncSum;
        let i;
        const startTime = Date.now();
        do {
            n *= 2;
            valueNPrev = valueN;
            valueN = 0;
            h = (b - a) / n;
            evenXFuncSum = 0;
            oddXFuncSum = 0;
            i = 1;
            for (let x = a + h; x <= b - h; x += h) {
                if (i % 2 == 0) { // y2, y4, etc...
                    evenXFuncSum += fc.calc(x);
                }
                else { // y1, y3, etc...
                    oddXFuncSum += fc.calc(x);
                }
                i++;
            }
            valueN = h / 3 * (fc.calc(a) + 4 * oddXFuncSum + 2 * evenXFuncSum + fc.calc(b));
            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {
                throw Error("Превышено максимальное время вычисления. Желаемая точность не достигнута." +
                    "\nПоследние полученные значения:" +
                    `\n  значение интеграла:   ${valueN}` +
                    `\n  количество разбиений: ${n}`);
            }
        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));
        return new MethodResult_1.MethodResult(valueN, n);
    }
}
exports.SimpsonMethod = SimpsonMethod;
//# sourceMappingURL=SimpsonMethod.js.map