import { Attribute } from './../models/attribute.model';
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
  attributes: Attribute[];
  checkAtrributes: boolean = true;


  constructor(private characterService: CharacterService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService.getCharacter(+this.currentId);
    this.attributes = this.characterService.getAttributes(+this.currentId);
    if(!Array.isArray(this.attributes) || !this.attributes.length) {
      this.checkAtrributes = false;
    }
  }

  getName() {
    return this.character.getName();
  }

  onClickEditPage() {
    this.router.navigate(['/edit-character', this.character.getUniqueId()]);
  }

  onReturnCharacterList() {
    this.router.navigate(['/character-list']);
  }

}
