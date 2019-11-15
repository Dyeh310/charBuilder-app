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

  // TODO
  // If NO changes are made, ignore Edit-Confirmation page


  currentId: string;
  character: Character;
  attributes: Attribute[];
  counter = 1;
  // connected to the HTML input field
  nameField;
  // Check for empty name
  nameCheck: boolean = true;
  confirmationCheck: boolean = false;


  constructor(private characterService: CharacterService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService.getCharacter(+this.currentId);
    this.attributes = this.characterService.getAttributes(+this.currentId);
    this.nameField = this.getName();
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
      const name = document.getElementById('nameField') as HTMLInputElement;
      const nameValue = name.value;

      // Check if the name field is empty
      if (this.characterService.emptpyName(nameValue)){
        this.nameCheck = false;
        return;
      }

      // Save any changes to the name
      this.character.setName(nameValue);
      this.onNavigate(this.confirmationCheck);
  }

  onCheckSwitch() {
    if (this.confirmationCheck) {
      this.confirmationCheck = false;
    } else {
      this.confirmationCheck = true;
    }
  }

  // TODO
  // Save the Confirmation Check to the character itself
  onNavigate(check: boolean) {
    if (check === true) {
      this.router.navigate(['/edit-confirmation']);
    } else {
      this.router.navigate(['/character-list']);
    }
  }


}
