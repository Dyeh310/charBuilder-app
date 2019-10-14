import { Component, OnInit } from '@angular/core';
import { Character } from './../models/character.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CharacterService } from './../services/character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

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
