export class Character {
    uniqueId: number;
    name: string;

    constructor(uniqueId: number, name: string) {
        this.uniqueId = uniqueId;
        this.name = name;
    }

    getUniqueId() {
        return this.uniqueId;
    }

    getName() {
        return this.name;
    }

    setUniqueId(uniqueId: number) {
        this.uniqueId = uniqueId;
    }

    setName(name: string) {
        this.name = name;
    }
}
