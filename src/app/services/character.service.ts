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
    const id = Math.round(Math.random() * 1000);
    return id;
  }

  getCharacters() {
    return this.characterList;
  }
}
