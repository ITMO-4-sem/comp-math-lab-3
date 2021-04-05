/**
 *
 */
export class MethodInput {

    private readonly a: number;
    private readonly b: number;
    private readonly accuracy: number = 0.1;

    public static readonly ACCURACY_DEFAULT: number = 0.01;


    constructor(a: number, b: number, accuracy: number = MethodInput.ACCURACY_DEFAULT) {

        if (a >= b)
            // The 'a', a left border must be to the left of the 'b', a right border.
            throw new Error("'a', левая граница, должна быть левее 'b', правой границы.");

        if (accuracy > 1) {
            // Accuracy (epsilon) must be below 1.
            throw new Error("Погрешность (эпсилон) должна быть меньше 1.")
        }

        this.a = a;
        this.b = b;
        this.accuracy = accuracy;
    }




    public getA(): number {
        return this.a;
    }


    public getB(): number {
        return this.b;
    }


    public getAccuracy(): number {
        return this.accuracy;
    }
}