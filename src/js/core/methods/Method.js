"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
/**
 *
 */
class Method {
    isAccuracyProficient(valueN, valueNPrev, accuracy) {
        if (valueNPrev == null) {
            return false;
        }
        return (Math.abs(valueN - valueNPrev) <= accuracy);
    }
}
exports.Method = Method;
Method.initialN = 4;
//# sourceMappingURL=Method.js.map