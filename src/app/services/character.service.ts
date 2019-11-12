import { Attribute } from './../models/attribute.model';
import { Character } from './../models/character.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterList: Character[] = [
    new Character(this.generateUniqueId(), 'Dyeh', [
      new Attribute('Health', '40'),
      new Attribute('Magic', '15'),
      new Attribute('Strength', '8'),
      new Attribute('Speed', '5'),
      new Attribute('Endurance', '5'),
    ]),
    new Character(this.generateUniqueId(), 'Anaid', [
      new Attribute('Health', '40'),
      new Attribute('Energy', '15'),
      new Attribute('Intelligence', '12'),
      new Attribute('Endurance', '5'),
    ]),
    new Character(this.generateUniqueId(), 'Alnichos', [
      new Attribute('Health', '80'),
      new Attribute('Magic', '15'),
      new Attribute('Strength', '8'),
      new Attribute('Speed', '5'),
      new Attribute('Willpower', '5'),
    ]),
    new Character(this.generateUniqueId(), 'Aricia', [
      new Attribute('Shield', '200'),
      new Attribute('Endurance', '5'),
      new Attribute('Attack', '4'),
    ]),
    new Character(this.generateUniqueId(), 'Eachilm', []),
    new Character(this.generateUniqueId(), 'Nemorensis', []),
  ];

  constructor() {}

  generateUniqueId() {
    const id = Math.round(Math.random() * 10000);
    return id;
  }

  createCharacter(name: string) {
    const newCharacter = new Character(this.generateUniqueId(), name, []);
    this.characterList.push(newCharacter);
  }

  setCharacter(char: Character): void {
    this.characterList.push(char);
  }

  // get a single character by Id
  getCharacter(id: number): Character {
    for (let char in this.characterList) {
      if (this.characterList[char].getUniqueId() === id) {
        return this.characterList[char];
      }
    }
  }

  // get all characters
  getCharacters() {
    return this.characterList;
  }

  getAttributes(id: number) {
    for (const x in this.characterList) {
      if (this.characterList[x].getUniqueId() === id) {
        return this.characterList[x].attributes;
      }
    }
  }

  // return false if the name field is empty when saved.
  emptpyName(name: string): boolean {
    if (name === '') {
      return true;
    } else {
      return false;
    }
  }


}

