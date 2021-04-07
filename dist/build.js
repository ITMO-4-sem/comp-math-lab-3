/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/core/functions/FirstFunctionContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/core/functions/FirstFunctionContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.FirstFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass FirstFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"x ^ 2\";\r\n    }\r\n    calc(x) {\r\n        return (x * x);\r\n    }\r\n}\r\nexports.FirstFunctionContainer = FirstFunctionContainer;\r\n//# sourceMappingURL=FirstFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/functions/FirstFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/functions/SecondFunctionContainer.js":
/*!**********************************************************!*\
  !*** ./src/js/core/functions/SecondFunctionContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SecondFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass SecondFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"x\";\r\n    }\r\n    calc(x) {\r\n        return (x);\r\n    }\r\n}\r\nexports.SecondFunctionContainer = SecondFunctionContainer;\r\n//# sourceMappingURL=SecondFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/functions/SecondFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/functions/ThirdFunctionContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/core/functions/ThirdFunctionContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ThirdFunctionContainer = void 0;\r\n/**\r\n *\r\n */\r\nclass ThirdFunctionContainer {\r\n    getFunctionRepresentation() {\r\n        return \"sin(x)\";\r\n    }\r\n    calc(x) {\r\n        return (Math.sin(x));\r\n    }\r\n}\r\nexports.ThirdFunctionContainer = ThirdFunctionContainer;\r\n//# sourceMappingURL=ThirdFunctionContainer.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/functions/ThirdFunctionContainer.js?");

/***/ }),

/***/ "./src/js/core/inputs/MethodInput.js":
/*!*******************************************!*\
  !*** ./src/js/core/inputs/MethodInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodInput = void 0;\r\n/**\r\n *\r\n */\r\nclass MethodInput {\r\n    constructor(a, b, accuracy = MethodInput.ACCURACY_DEFAULT) {\r\n        this.accuracy = 0.1;\r\n        if (a >= b)\r\n            // The 'a', a left border must be to the left of the 'b', a right border.\r\n            throw new Error(\"'a', левая граница, должна быть левее 'b', правой границы.\");\r\n        if (accuracy > 1) {\r\n            // Accuracy (epsilon) must be below 1.\r\n            throw new Error(\"Погрешность (эпсилон) должна быть меньше 1.\");\r\n        }\r\n        this.a = a;\r\n        this.b = b;\r\n        this.accuracy = accuracy;\r\n    }\r\n    getA() {\r\n        return this.a;\r\n    }\r\n    getB() {\r\n        return this.b;\r\n    }\r\n    getAccuracy() {\r\n        return this.accuracy;\r\n    }\r\n}\r\nexports.MethodInput = MethodInput;\r\nMethodInput.ACCURACY_DEFAULT = 0.01;\r\n//# sourceMappingURL=MethodInput.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/inputs/MethodInput.js?");

/***/ }),

/***/ "./src/js/core/methods/Method.js":
/*!***************************************!*\
  !*** ./src/js/core/methods/Method.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Method = void 0;\r\n/**\r\n *\r\n */\r\nclass Method {\r\n    isAccuracyProficient(valueN, valueNPrev, accuracy) {\r\n        if (valueNPrev == null) {\r\n            return false;\r\n        }\r\n        return (Math.abs(valueN - valueNPrev) <= accuracy);\r\n    }\r\n}\r\nexports.Method = Method;\r\nMethod.initialN = 4;\r\n//# sourceMappingURL=Method.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/Method.js?");

/***/ }),

/***/ "./src/js/core/methods/RectanglesLeftMethod.js":
/*!*****************************************************!*\
  !*** ./src/js/core/methods/RectanglesLeftMethod.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RectanglesLeftMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst MethodResult_1 = __webpack_require__(/*! ../results/MethodResult */ \"./src/js/core/results/MethodResult.js\");\r\nconst method_config_1 = __importDefault(__webpack_require__(/*! ./method.config */ \"./src/js/core/methods/method.config.js\"));\r\nclass RectanglesLeftMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let n = Method_1.Method.initialN / 2;\r\n        let valueN = null;\r\n        let valueNPrev = null;\r\n        const accuracy = input.getAccuracy();\r\n        const a = input.getA();\r\n        const b = input.getB();\r\n        let h;\r\n        const startTime = Date.now();\r\n        do {\r\n            n *= 2;\r\n            valueNPrev = valueN;\r\n            valueN = 0;\r\n            h = (b - a) / n;\r\n            for (let x = a; x <= b - h; x += h) {\r\n                valueN += fc.calc(x);\r\n            }\r\n            valueN *= h;\r\n            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {\r\n                throw Error(\"Превышено максимальное время вычисления. Желаемая точность не достигнута.\" +\r\n                    \"\\nПоследние полученные значения:\" +\r\n                    `\\n  значение интеграла:   ${valueN}` +\r\n                    `\\n  количество разбиений: ${n}`);\r\n            }\r\n        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));\r\n        return new MethodResult_1.MethodResult(valueN, n);\r\n    }\r\n}\r\nexports.RectanglesLeftMethod = RectanglesLeftMethod;\r\n//# sourceMappingURL=RectanglesLeftMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/RectanglesLeftMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/RectanglesMiddleMethod.js":
/*!*******************************************************!*\
  !*** ./src/js/core/methods/RectanglesMiddleMethod.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RectanglesMiddleMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst MethodResult_1 = __webpack_require__(/*! ../results/MethodResult */ \"./src/js/core/results/MethodResult.js\");\r\nconst method_config_1 = __importDefault(__webpack_require__(/*! ./method.config */ \"./src/js/core/methods/method.config.js\"));\r\nclass RectanglesMiddleMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let n = Method_1.Method.initialN / 2;\r\n        let valueN = null;\r\n        let valueNPrev = null;\r\n        const accuracy = input.getAccuracy();\r\n        const a = input.getA();\r\n        const b = input.getB();\r\n        let h;\r\n        const startTime = Date.now();\r\n        do {\r\n            n *= 2;\r\n            valueNPrev = valueN;\r\n            valueN = 0;\r\n            h = (b - a) / n;\r\n            for (let x = a + h / 2; x <= b - h / 2; x += h) {\r\n                valueN += fc.calc(x);\r\n            }\r\n            valueN *= h;\r\n            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {\r\n                throw Error(\"Превышено максимальное время вычисления. Желаемая точность не достигнута.\" +\r\n                    \"\\nПоследние полученные значения:\" +\r\n                    `\\n  значение интеграла:   ${valueN}` +\r\n                    `\\n  количество разбиений: ${n}`);\r\n            }\r\n        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));\r\n        return new MethodResult_1.MethodResult(valueN, n);\r\n    }\r\n}\r\nexports.RectanglesMiddleMethod = RectanglesMiddleMethod;\r\n//# sourceMappingURL=RectanglesMiddleMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/RectanglesMiddleMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/RectanglesRightMethod.js":
/*!******************************************************!*\
  !*** ./src/js/core/methods/RectanglesRightMethod.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RectanglesRightMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst MethodResult_1 = __webpack_require__(/*! ../results/MethodResult */ \"./src/js/core/results/MethodResult.js\");\r\nconst method_config_1 = __importDefault(__webpack_require__(/*! ./method.config */ \"./src/js/core/methods/method.config.js\"));\r\nclass RectanglesRightMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let n = Method_1.Method.initialN / 2;\r\n        let valueN = null;\r\n        let valueNPrev = null;\r\n        const accuracy = input.getAccuracy();\r\n        const a = input.getA();\r\n        const b = input.getB();\r\n        let h;\r\n        const startTime = Date.now();\r\n        do {\r\n            n *= 2;\r\n            valueNPrev = valueN;\r\n            valueN = 0;\r\n            h = (b - a) / n;\r\n            for (let x = a + h; x <= b; x += h) {\r\n                valueN += fc.calc(x);\r\n            }\r\n            valueN *= h;\r\n            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {\r\n                throw Error(\"Превышено максимальное время вычисления. Желаемая точность не достигнута.\" +\r\n                    \"\\nПоследние полученные значения:\" +\r\n                    `\\n  значение интеграла:   ${valueN}` +\r\n                    `\\n  количество разбиений: ${n}`);\r\n            }\r\n        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));\r\n        return new MethodResult_1.MethodResult(valueN, n);\r\n    }\r\n}\r\nexports.RectanglesRightMethod = RectanglesRightMethod;\r\n//# sourceMappingURL=RectanglesRightMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/RectanglesRightMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/SimpsonMethod.js":
/*!**********************************************!*\
  !*** ./src/js/core/methods/SimpsonMethod.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SimpsonMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst MethodResult_1 = __webpack_require__(/*! ../results/MethodResult */ \"./src/js/core/results/MethodResult.js\");\r\nconst method_config_1 = __importDefault(__webpack_require__(/*! ./method.config */ \"./src/js/core/methods/method.config.js\"));\r\nclass SimpsonMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let n = Method_1.Method.initialN / 2;\r\n        let valueN = null;\r\n        let valueNPrev = null;\r\n        const accuracy = input.getAccuracy();\r\n        const a = input.getA();\r\n        const b = input.getB();\r\n        let h;\r\n        let evenXFuncSum;\r\n        let oddXFuncSum;\r\n        let i;\r\n        const startTime = Date.now();\r\n        do {\r\n            n *= 2;\r\n            valueNPrev = valueN;\r\n            valueN = 0;\r\n            h = (b - a) / n;\r\n            evenXFuncSum = 0;\r\n            oddXFuncSum = 0;\r\n            i = 1;\r\n            for (let x = a + h; x <= b - h; x += h) {\r\n                if (i % 2 == 0) { // y2, y4, etc...\r\n                    evenXFuncSum += fc.calc(x);\r\n                }\r\n                else { // y1, y3, etc...\r\n                    oddXFuncSum += fc.calc(x);\r\n                }\r\n                i++;\r\n            }\r\n            valueN = h / 3 * (fc.calc(a) + 4 * oddXFuncSum + 2 * evenXFuncSum + fc.calc(b));\r\n            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {\r\n                throw Error(\"Превышено максимальное время вычисления. Желаемая точность не достигнута.\" +\r\n                    \"\\nПоследние полученные значения:\" +\r\n                    `\\n  значение интеграла:   ${valueN}` +\r\n                    `\\n  количество разбиений: ${n}`);\r\n            }\r\n        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));\r\n        return new MethodResult_1.MethodResult(valueN, n);\r\n    }\r\n}\r\nexports.SimpsonMethod = SimpsonMethod;\r\n//# sourceMappingURL=SimpsonMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/SimpsonMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/TrapezoidsMethod.js":
/*!*************************************************!*\
  !*** ./src/js/core/methods/TrapezoidsMethod.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TrapezoidsMethod = void 0;\r\nconst Method_1 = __webpack_require__(/*! ./Method */ \"./src/js/core/methods/Method.js\");\r\nconst MethodResult_1 = __webpack_require__(/*! ../results/MethodResult */ \"./src/js/core/results/MethodResult.js\");\r\nconst method_config_1 = __importDefault(__webpack_require__(/*! ./method.config */ \"./src/js/core/methods/method.config.js\"));\r\nclass TrapezoidsMethod extends Method_1.Method {\r\n    calculate(input, fc) {\r\n        let n = Method_1.Method.initialN / 2;\r\n        let valueN = null;\r\n        let valueNPrev = null;\r\n        const accuracy = input.getAccuracy();\r\n        const a = input.getA();\r\n        const b = input.getB();\r\n        let h;\r\n        const startTime = Date.now();\r\n        do {\r\n            n *= 2;\r\n            valueNPrev = valueN;\r\n            valueN = 0;\r\n            h = (b - a) / n;\r\n            for (let x = a + h; x <= b - h; x += h) {\r\n                valueN += fc.calc(x);\r\n            }\r\n            valueN = h * ((fc.calc(a) + fc.calc(b)) / 2 + valueN);\r\n            if (Date.now() - startTime >= method_config_1.default.maxTimeout) {\r\n                throw Error(\"Превышено максимальное время вычисления. Желаемая точность не достигнута.\" +\r\n                    \"\\nПоследние полученные значения:\" +\r\n                    `\\n  значение интеграла:   ${valueN}` +\r\n                    `\\n  количество разбиений: ${n}`);\r\n            }\r\n        } while (!this.isAccuracyProficient(valueN, valueNPrev, accuracy));\r\n        return new MethodResult_1.MethodResult(valueN, n);\r\n    }\r\n}\r\nexports.TrapezoidsMethod = TrapezoidsMethod;\r\n//# sourceMappingURL=TrapezoidsMethod.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/TrapezoidsMethod.js?");

/***/ }),

/***/ "./src/js/core/methods/method.config.js":
/*!**********************************************!*\
  !*** ./src/js/core/methods/method.config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    maxTimeout: 8000,\r\n};\r\n//# sourceMappingURL=method.config.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/methods/method.config.js?");

/***/ }),

/***/ "./src/js/core/results/MethodResult.js":
/*!*********************************************!*\
  !*** ./src/js/core/results/MethodResult.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MethodResult = void 0;\r\n/**\r\n *\r\n */\r\nclass MethodResult {\r\n    constructor(value, iterationsNumber) {\r\n        this.value = value;\r\n        this.partitionNumber = iterationsNumber;\r\n    }\r\n    getValue() {\r\n        return this.value;\r\n    }\r\n    getPartitionNumber() {\r\n        return this.partitionNumber;\r\n    }\r\n}\r\nexports.MethodResult = MethodResult;\r\n//# sourceMappingURL=MethodResult.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/core/results/MethodResult.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst FirstFunctionContainer_1 = __webpack_require__(/*! ./core/functions/FirstFunctionContainer */ \"./src/js/core/functions/FirstFunctionContainer.js\");\r\nconst SecondFunctionContainer_1 = __webpack_require__(/*! ./core/functions/SecondFunctionContainer */ \"./src/js/core/functions/SecondFunctionContainer.js\");\r\nconst ThirdFunctionContainer_1 = __webpack_require__(/*! ./core/functions/ThirdFunctionContainer */ \"./src/js/core/functions/ThirdFunctionContainer.js\");\r\nconst RectanglesLeftMethod_1 = __webpack_require__(/*! ./core/methods/RectanglesLeftMethod */ \"./src/js/core/methods/RectanglesLeftMethod.js\");\r\nconst RectanglesRightMethod_1 = __webpack_require__(/*! ./core/methods/RectanglesRightMethod */ \"./src/js/core/methods/RectanglesRightMethod.js\");\r\nconst RectanglesMiddleMethod_1 = __webpack_require__(/*! ./core/methods/RectanglesMiddleMethod */ \"./src/js/core/methods/RectanglesMiddleMethod.js\");\r\nconst TrapezoidsMethod_1 = __webpack_require__(/*! ./core/methods/TrapezoidsMethod */ \"./src/js/core/methods/TrapezoidsMethod.js\");\r\nconst SimpsonMethod_1 = __webpack_require__(/*! ./core/methods/SimpsonMethod */ \"./src/js/core/methods/SimpsonMethod.js\");\r\nconst MethodInput_1 = __webpack_require__(/*! ./core/inputs/MethodInput */ \"./src/js/core/inputs/MethodInput.js\");\r\nconst loaderElement = document.getElementById(\"loader-wrapper\");\r\nconst formElement = document.getElementById(\"form\");\r\nconst notificationContentElement = document.getElementById(\"notification-content\");\r\nconst notificationDeleteElement = document.getElementById(\"notification-delete\");\r\nconst resultValueTDElement = document.getElementById(\"result-value\");\r\nconst resultPartitionNumberTDElement = document.getElementById(\"result-partition-number\");\r\nconst loaderClasses = {\r\n    isActive: \"is-active\",\r\n};\r\nconst formFieldsNames = {\r\n    func: {\r\n        name: \"function\",\r\n        values: {\r\n            first: \"first\",\r\n            second: \"second\",\r\n            third: \"third\",\r\n        }\r\n    },\r\n    method: {\r\n        name: \"method\",\r\n        values: {\r\n            rectanglesLeftMethod: \"rectanglesLeft\",\r\n            rectanglesRightMethod: \"rectanglesRight\",\r\n            rectanglesMiddleMethod: \"rectanglesMiddle\",\r\n            trapezoidsMethod: \"trapezoids\",\r\n            simpsonMethod: \"simpson\"\r\n        }\r\n    },\r\n    a: {\r\n        name: \"a\",\r\n    },\r\n    b: {\r\n        name: \"b\",\r\n    },\r\n    accuracy: {\r\n        name: \"accuracy\"\r\n    }\r\n};\r\nconst firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();\r\nconst secondFuncCont = new SecondFunctionContainer_1.SecondFunctionContainer();\r\nconst thirdFuncCont = new ThirdFunctionContainer_1.ThirdFunctionContainer();\r\nconst rectanglesLeftMethod = new RectanglesLeftMethod_1.RectanglesLeftMethod();\r\nconst rectanglesRightMethod = new RectanglesRightMethod_1.RectanglesRightMethod();\r\nconst rectanglesMiddleMethod = new RectanglesMiddleMethod_1.RectanglesMiddleMethod();\r\nconst trapezoidsMethod = new TrapezoidsMethod_1.TrapezoidsMethod();\r\nconst simpsonMethod = new SimpsonMethod_1.SimpsonMethod();\r\ninit();\r\nfunction init() {\r\n    notificationDeleteElement.addEventListener(\"click\", () => {\r\n        clearNotificationContent();\r\n    });\r\n    formElement.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        handleFormData();\r\n    });\r\n}\r\nfunction handleFormData() {\r\n    const formData = new FormData(formElement);\r\n    let method;\r\n    let funcCont;\r\n    switch (formData.get(formFieldsNames.func.name)) {\r\n        case (formFieldsNames.func.values.first): {\r\n            funcCont = firstFuncCont;\r\n            break;\r\n        }\r\n        case (formFieldsNames.func.values.second): {\r\n            funcCont = secondFuncCont;\r\n            break;\r\n        }\r\n        case (formFieldsNames.func.values.third): {\r\n            funcCont = thirdFuncCont;\r\n            break;\r\n        }\r\n        default: {\r\n            throw Error(\"Unsupported function is chosen. Check 'formFieldsNames.func'.\");\r\n        }\r\n    }\r\n    switch (formData.get(formFieldsNames.method.name)) {\r\n        case (formFieldsNames.method.values.rectanglesLeftMethod): {\r\n            method = rectanglesLeftMethod;\r\n            break;\r\n        }\r\n        case (formFieldsNames.method.values.rectanglesRightMethod): {\r\n            method = rectanglesRightMethod;\r\n            break;\r\n        }\r\n        case (formFieldsNames.method.values.rectanglesMiddleMethod): {\r\n            method = rectanglesMiddleMethod;\r\n            break;\r\n        }\r\n        case (formFieldsNames.method.values.trapezoidsMethod): {\r\n            method = trapezoidsMethod;\r\n            break;\r\n        }\r\n        case (formFieldsNames.method.values.simpsonMethod): {\r\n            method = simpsonMethod;\r\n            break;\r\n        }\r\n        default: {\r\n            throw Error(\"Unsupported method is chosen. Check 'formFieldsNames.method'.\");\r\n        }\r\n    }\r\n    let a = parseFloat(formData.get(formFieldsNames.a.name));\r\n    let b = parseFloat(formData.get(formFieldsNames.b.name));\r\n    let accuracy = parseFloat(formData.get(formFieldsNames.accuracy.name));\r\n    const accuracyLength = formData.get(formFieldsNames.accuracy.name).length - 2;\r\n    if (isNaN(a) || isNaN(b) || isNaN(accuracy)) {\r\n        console.log(\"a = \", a);\r\n        setNotificationContent(\"Введите верные данные.\");\r\n        return;\r\n    }\r\n    showLoader();\r\n    let res;\r\n    setTimeout(() => {\r\n        try {\r\n            res = method.calculate(new MethodInput_1.MethodInput(a, b, accuracy), funcCont);\r\n            resultValueTDElement.innerText = res.getValue().toFixed(accuracyLength).toString();\r\n            resultPartitionNumberTDElement.innerText = res.getPartitionNumber().toFixed(accuracyLength).toString();\r\n            hideErrorNotifications();\r\n        }\r\n        catch (e) {\r\n            setNotificationContent(e);\r\n            resultValueTDElement.innerText = \"\";\r\n            resultPartitionNumberTDElement.innerText = \"\";\r\n        }\r\n        finally {\r\n            hideLoader();\r\n        }\r\n    }, 20);\r\n}\r\nfunction setNotificationContent(message) {\r\n    notificationContentElement.innerText = message;\r\n}\r\nfunction clearNotificationContent() {\r\n    setNotificationContent(\"\");\r\n}\r\nfunction showLoader() {\r\n    loaderElement.classList.add(loaderClasses.isActive);\r\n}\r\nfunction hideLoader() {\r\n    loaderElement.classList.remove(loaderClasses.isActive);\r\n}\r\nfunction hideErrorNotifications() {\r\n    clearNotificationContent();\r\n}\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://comp-math-lab-3/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;