import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  
  counter = 1;


  constructor(private characterService: CharacterService,
              private router: Router) { }

  ngOnInit() {
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

  onCreateFields() {
    const formTag = document.getElementById('main_form');

    const newDiv = document.createElement('div');
    const addDiv = newDiv as HTMLElement;
    addDiv.id = 'id' + this.counter;
    this.counter++;
    $(addDiv).addClass('row');
    formTag.appendChild(addDiv);

    const firstDiv = document.createElement('div');
    $(firstDiv).addClass('col display_list_border');
    const secondDiv = document.createElement('div');
    $(secondDiv).addClass('col display_list_border');

    addDiv.appendChild(firstDiv);
    addDiv.appendChild(secondDiv);

    const firstInput = document.createElement('input');
    $(firstInput).addClass('text-center inputs');
    const secondInput = document.createElement('input');
    $(secondInput).addClass('text-center inputs');

    firstDiv.appendChild(firstInput);
    secondDiv.appendChild(secondInput);

    console.log(formTag);
  }

  onSaveCharacter() {
    // the entire form
    const form = document.getElementById('main_form');

    // get name field
    const name = document.getElementById('nameField') as HTMLInputElement;
    const nameValue = name.value;

    // loop to get input fields
    const inputs = document.getElementsByClassName('inputs');
    let count = 0;
    let tempArray = [];
    let realArray = [];

    const char: Character = new Character(
      this.characterService.generateUniqueId(), nameValue, []
    );

    console.log(char.getAttributes());
    // tslint:disable-next-line: forin
    for (let i = 0; i < inputs.length; i++) {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      tempArray.push((inputs[i] as HTMLInputElement).value);
      realArray.push(tempArray.slice(0));

      tempArray = [];

      count++;
      if (count === 2) {
        char.setAttribute(realArray[0], realArray[1]);
        count = 0;
        realArray = [];
        console.log(char);
      }
    }
    // create and push new character
    this.characterService.setCharacter(char);
    this.router.navigate(['/character-list']);
  }

}
