export class Attribute {
    label: string;
    input: string;

    constructor(label: string, input: string) {
        this.label = label;
        this.input = input;
    }

    getLabel(): string {
        return this.label;
    }

    getInput(): string {
        return this.input;
    } 
}
