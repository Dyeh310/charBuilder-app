import { Component, OnInit } from '@angular/core';
import { Character } from './../models/character.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CharacterService } from './../services/character.service';
import { Attribute } from './../models/attribute.model';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  currentId: string;

  character: Character;
  attributes: Attribute[];


  constructor(private characterService: CharacterService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService.getCharacter(+this.currentId);
    this.attributes = this.characterService.getAttributes(+this.currentId);
    console.log('Attributes ' + this.attributes);
    console.log(this.character);
    console.log(+this.currentId);
  }

  getName() {
    return this.character.getName();
  }

  onSaveInput(data, i) {
    this.attributes[i].setInput(data);
  }

  onSaveLabel(data, i) {
    this.attributes[i].setLabel(data);
  }

  // TODO create
}
