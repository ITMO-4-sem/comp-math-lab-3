"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectanglesLeftMethod = void 0;
const Method_1 = require("./Method");
const MethodResult_1 = require("../results/MethodResult");
class RectanglesLeftMethod extends Method_1.Method {
    calculate(input, fc) {
        let n = RectanglesLeftMethod.initialN / 2;
        let valueN = null;
        let valueNPrev = null;
        const accuracy = input.getAccuracy();
        const a = input.getA();
        const b = input.getB();
        let h;
        do {
            n *= 2;
            valueNPrev = valueN;
            valueN = 0;
            h = (b - a) / n;
            for (let x = a; x < b; x += h) {
                valueN += fc.calc(x);
            }
            valueN *= h;
        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));
        return new MethodResult_1.MethodResult(valueN, n);
    }
}
exports.RectanglesLeftMethod = RectanglesLeftMethod;
//# sourceMappingURL=RectanglesLeftMethod.js.map