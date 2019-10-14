import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  charList: Character[];
  orderForm: FormGroup;
  items: FormArray;

  constructor(private characterService: CharacterService,
              private router: Router,
              private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formbuilder.group ({
      customerName: ''
    });
  }

  onSubmit(form): void {
    const name = form.charName;

    // create new character
    this.characterService.createCharacter(name);
    console.log(this.characterService.getCharacters());
  }

  onReturnToCharList() {
    this.router.navigate(['/character-list']);
  }

}
