"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstFunctionContainer_1 = require("./core/functions/FirstFunctionContainer");
const SecondFunctionContainer_1 = require("./core/functions/SecondFunctionContainer");
const ThirdFunctionContainer_1 = require("./core/functions/ThirdFunctionContainer");
const RectanglesLeftMethod_1 = require("./core/methods/RectanglesLeftMethod");
const RectanglesRightMethod_1 = require("./core/methods/RectanglesRightMethod");
const RectanglesMiddleMethod_1 = require("./core/methods/RectanglesMiddleMethod");
const TrapezoidsMethod_1 = require("./core/methods/TrapezoidsMethod");
const SimpsonMethod_1 = require("./core/methods/SimpsonMethod");
const MethodInput_1 = require("./core/inputs/MethodInput");
const loaderElement = document.getElementById("loader-wrapper");
const formElement = document.getElementById("form");
const notificationContentElement = document.getElementById("notification-content");
const notificationDeleteElement = document.getElementById("notification-delete");
const resultValueTDElement = document.getElementById("result-value");
const resultPartitionNumberTDElement = document.getElementById("result-partition-number");
const loaderClasses = {
    isActive: "is-active",
};
const formFieldsNames = {
    func: {
        name: "function",
        values: {
            first: "first",
            second: "second",
            third: "third",
        }
    },
    method: {
        name: "method",
        values: {
            rectanglesLeftMethod: "rectanglesLeft",
            rectanglesRightMethod: "rectanglesRight",
            rectanglesMiddleMethod: "rectanglesMiddle",
            trapezoidsMethod: "trapezoids",
            simpsonMethod: "simpson"
        }
    },
    a: {
        name: "a",
    },
    b: {
        name: "b",
    },
    accuracy: {
        name: "accuracy"
    }
};
const firstFuncCont = new FirstFunctionContainer_1.FirstFunctionContainer();
const secondFuncCont = new SecondFunctionContainer_1.SecondFunctionContainer();
const thirdFuncCont = new ThirdFunctionContainer_1.ThirdFunctionContainer();
const rectanglesLeftMethod = new RectanglesLeftMethod_1.RectanglesLeftMethod();
const rectanglesRightMethod = new RectanglesRightMethod_1.RectanglesRightMethod();
const rectanglesMiddleMethod = new RectanglesMiddleMethod_1.RectanglesMiddleMethod();
const trapezoidsMethod = new TrapezoidsMethod_1.TrapezoidsMethod();
const simpsonMethod = new SimpsonMethod_1.SimpsonMethod();
init();
function init() {
    notificationDeleteElement.addEventListener("click", () => {
        clearNotificationContent();
    });
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        handleFormData();
    });
}
function handleFormData() {
    const formData = new FormData(formElement);
    let method;
    let funcCont;
    switch (formData.get(formFieldsNames.func.name)) {
        case (formFieldsNames.func.values.first): {
            funcCont = firstFuncCont;
            break;
        }
        case (formFieldsNames.func.values.second): {
            funcCont = secondFuncCont;
            break;
        }
        case (formFieldsNames.func.values.third): {
            funcCont = thirdFuncCont;
            break;
        }
        default: {
            throw Error("Unsupported function is chosen. Check 'formFieldsNames.func'.");
        }
    }
    switch (formData.get(formFieldsNames.method.name)) {
        case (formFieldsNames.method.values.rectanglesLeftMethod): {
            method = rectanglesLeftMethod;
            break;
        }
        case (formFieldsNames.method.values.rectanglesRightMethod): {
            method = rectanglesRightMethod;
            break;
        }
        case (formFieldsNames.method.values.rectanglesMiddleMethod): {
            method = rectanglesMiddleMethod;
            break;
        }
        case (formFieldsNames.method.values.trapezoidsMethod): {
            method = trapezoidsMethod;
            break;
        }
        case (formFieldsNames.method.values.simpsonMethod): {
            method = simpsonMethod;
            break;
        }
        default: {
            throw Error("Unsupported method is chosen. Check 'formFieldsNames.method'.");
        }
    }
    let a = parseFloat(formData.get(formFieldsNames.a.name));
    let b = parseFloat(formData.get(formFieldsNames.b.name));
    let accuracy = parseFloat(formData.get(formFieldsNames.accuracy.name));
    const accuracyLength = formData.get(formFieldsNames.accuracy.name).length - 2;
    if (isNaN(a) || isNaN(b) || isNaN(accuracy)) {
        console.log("a = ", a);
        setNotificationContent("Введите верные данные.");
        return;
    }
    showLoader();
    let res;
    setTimeout(() => {
        try {
            res = method.calculate(new MethodInput_1.MethodInput(a, b, accuracy), funcCont);
            resultValueTDElement.innerText = res.getValue().toFixed(accuracyLength).toString();
            resultPartitionNumberTDElement.innerText = res.getPartitionNumber().toFixed(accuracyLength).toString();
            hideErrorNotifications();
        }
        catch (e) {
            setNotificationContent(e);
        }
        finally {
            hideLoader();
        }
    }, 20);
}
function setNotificationContent(message) {
    notificationContentElement.innerText = message;
}
function clearNotificationContent() {
    setNotificationContent("");
}
function showLoader() {
    loaderElement.classList.add(loaderClasses.isActive);
}
function hideLoader() {
    loaderElement.classList.remove(loaderClasses.isActive);
}
function hideErrorNotifications() {
    clearNotificationContent();
}
//# sourceMappingURL=index.js.map