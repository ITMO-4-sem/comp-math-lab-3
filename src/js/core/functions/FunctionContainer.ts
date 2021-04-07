/**
 *
 */
export interface FunctionContainer {
    getFunctionRepresentation(): string;
    calc( x: number ): number;
}