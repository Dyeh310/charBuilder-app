import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList: Character[];
  
  constructor(private characterService: CharacterService,
              private router: Router) { }

  ngOnInit() {
    this.getCharacters();
    console.log(this.characterList);
  }

  getCharacters() {
    this.characterList = this.characterService.getCharacters();
  }

  toCreateCharacter() {
    this.router.navigate(['/create-character']);
  }



}
