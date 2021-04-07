import {FirstFunctionContainer} from "./core/functions/FirstFunctionContainer";
import {SecondFunctionContainer} from "./core/functions/SecondFunctionContainer";
import {ThirdFunctionContainer} from "./core/functions/ThirdFunctionContainer";
import {RectanglesLeftMethod} from "./core/methods/RectanglesLeftMethod";
import {RectanglesRightMethod} from "./core/methods/RectanglesRightMethod";
import {RectanglesMiddleMethod} from "./core/methods/RectanglesMiddleMethod";
import {Method} from "./core/methods/Method";
import {FunctionContainer} from "./core/functions/FunctionContainer";
import {TrapezoidsMethod} from "./core/methods/TrapezoidsMethod";
import {SimpsonMethod} from "./core/methods/SimpsonMethod";
import {MethodInput} from "./core/inputs/MethodInput";
import {MethodResult} from "./core/results/MethodResult";

const loaderElement: HTMLDivElement = document.getElementById("loader-wrapper") as HTMLDivElement;
const formElement: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
const notificationContentElement: HTMLParagraphElement = document.getElementById("notification-content") as HTMLParagraphElement;
const notificationDeleteElement: HTMLButtonElement = document.getElementById("notification-delete") as unknown as HTMLButtonElement;

const resultValueTDElement: HTMLTableDataCellElement = document.getElementById("result-value") as HTMLTableDataCellElement;
const resultPartitionNumberTDElement: HTMLTableDataCellElement = document.getElementById("result-partition-number") as HTMLTableDataCellElement;

const loaderClasses = {
    isActive: "is-active",
}

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
}

const firstFuncCont: FirstFunctionContainer = new FirstFunctionContainer();
const secondFuncCont: SecondFunctionContainer = new SecondFunctionContainer();
const thirdFuncCont: ThirdFunctionContainer = new ThirdFunctionContainer();

const rectanglesLeftMethod: RectanglesLeftMethod = new RectanglesLeftMethod();
const rectanglesRightMethod: RectanglesRightMethod = new RectanglesRightMethod();
const rectanglesMiddleMethod: RectanglesMiddleMethod = new RectanglesMiddleMethod();
const trapezoidsMethod: TrapezoidsMethod = new TrapezoidsMethod();
const simpsonMethod: SimpsonMethod = new SimpsonMethod();

init();


function init() {
    notificationDeleteElement.addEventListener("click", () => {
        clearNotificationContent();
    })

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        handleFormData();
    })
}


function handleFormData() {

    const formData: FormData = new FormData(formElement);

    let method: Method;
    let funcCont: FunctionContainer;


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
        } default: {
            throw Error("Unsupported method is chosen. Check 'formFieldsNames.method'.");
        }
    }

    let a: number = parseFloat(formData.get(formFieldsNames.a.name) as string);
    let b: number = parseFloat(formData.get(formFieldsNames.b.name) as string);
    let accuracy: number = parseFloat(formData.get(formFieldsNames.accuracy.name) as string);
    const accuracyLength = (formData.get(formFieldsNames.accuracy.name) as string).length - 2;

    if ( isNaN(a) || isNaN(b) || isNaN(accuracy) ) {
        console.log("a = ", a)
        setNotificationContent("Введите верные данные.");
        return;
    }



        showLoader();
        let res: MethodResult;

        setTimeout( () => { // тут, сука, другой контекст. Поэтому внешний для 'setTimeout()' try-catch ошибку поймать не смог.
            try {
                res = method.calculate(new MethodInput(a, b, accuracy), funcCont);
                resultValueTDElement.innerText = res.getValue().toFixed(accuracyLength).toString();
                resultPartitionNumberTDElement.innerText = res.getPartitionNumber().toFixed(accuracyLength).toString();
                hideErrorNotifications()

            } catch (e) {
                setNotificationContent(e);
                resultValueTDElement.innerText = "";
                resultPartitionNumberTDElement.innerText = "";
            } finally {
                hideLoader();
            }
        }, 20);
}





function setNotificationContent(message: string) {
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
