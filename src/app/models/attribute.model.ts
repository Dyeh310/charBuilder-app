export class Attribute {
    label: string;
    input: string;
    diceFlag: boolean;

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

    setDiceFlag(flag: boolean) {
        this.diceFlag = flag;
    }

    getDiceFlag() {
        return this.diceFlag;
    }

    setInput(input: string): void {
        this.input = input;
    }

    setLabel(label: string): void {
        this.label = label;
    }
}
