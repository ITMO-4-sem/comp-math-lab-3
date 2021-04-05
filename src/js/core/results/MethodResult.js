"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodResult = void 0;
/**
 *
 */
class MethodResult {
    constructor(value, iterationsNumber) {
        this.value = value;
        this.partitionNumber = iterationsNumber;
    }
    getValue() {
        return this.value;
    }
    getIterationsNumber() {
        return this.partitionNumber;
    }
}
exports.MethodResult = MethodResult;
//# sourceMappingURL=MethodResult.js.map