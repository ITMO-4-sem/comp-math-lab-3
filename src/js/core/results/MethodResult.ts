
/**
 *
 */
export class MethodResult {

    private readonly value: number;
    private readonly partitionNumber: number;


    constructor(value: number, iterationsNumber: number) {
        this.value = value;
        this.partitionNumber = iterationsNumber;
    }

    public getValue() {
        return this.value;
    }

    public getPartitionNumber() {
        return this.partitionNumber;
    }
}
