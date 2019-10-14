import { CharacterService } from './../services/character.service';
import { Character } from './../models/character.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-selected-character',
  templateUrl: './selected-character.component.html',
  styleUrls: ['./selected-character.component.css']
})
export class SelectedCharacterComponent implements OnInit {

  currentId: string;

  character: Character;

  constructor(private characterService: CharacterService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService.getCharacter(+this.currentId);
    console.log(this.character);
    console.log(+this.currentId);
  }

  getName() {
    return this.character.getName();
  }



}
