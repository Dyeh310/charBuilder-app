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
  counter = 1;


  constructor(private characterService: CharacterService,
              private router: Router,
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

  onReturnCharacterList() {
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
    // loop to get input fields
    const inputs = document.getElementsByClassName('inputs');
    let count = 0;
    let tempArray = [];
    let realArray = [];

    // tslint:disable-next-line: forin
    for (let i = 0; i < inputs.length; i++) {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      tempArray.push((inputs[i] as HTMLInputElement).value);
      realArray.push(tempArray.slice(0));

      tempArray = [];

      count++;
      if (count === 2) {
        this.character.setAttribute(realArray[0], realArray[1]);
        count = 0;
        realArray = [];
        console.log(this.character);
      }
    }
    // create and push new character
    this.router.navigate(['/character-list']);
  }
}
