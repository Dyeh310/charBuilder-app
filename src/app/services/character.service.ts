import { Character } from './../models/character.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // TODO REMOVE dummy characters
  characterList: Character[] = [
    new Character(this.generateUniqueId(), 'Dyeh'),
    new Character(this.generateUniqueId(), 'Anaid'),
    new Character(this.generateUniqueId(), 'Alnichos'),
    new Character(this.generateUniqueId(), 'Aricia'),
    new Character(this.generateUniqueId(), 'Dyeh'),
    new Character(this.generateUniqueId(), 'Nemorensis'),
  ];

  constructor() {}

  // generates ID for character
  // TODO make sure no character can have the same id
  generateUniqueId() {
    const id = Math.round(Math.random() * 10000);
    return id;
  }

  createCharacter(name: string) {
    const newCharacter = new Character(this.generateUniqueId(), name);
    this.characterList.push(newCharacter);
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
}
