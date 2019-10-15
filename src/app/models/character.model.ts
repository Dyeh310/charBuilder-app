import { Attribute } from './attribute.model';

export class Character {
    uniqueId: number;
    name: string;
    attributes: Attribute[];



    constructor(uniqueId: number, name: string, atrributes: Attribute[]) {
        this.uniqueId = uniqueId;
        this.name = name;
        this.attributes = atrributes;
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
