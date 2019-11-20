import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  // TODO
  // Add dice option 
  // First create popup
  // ask sides
  // add picture with that many sides
  // add roll button

  // Used to keep track of input IDs
  counter = 1;
  counterDice = 1;
  nameField: any;
  nameCheck: boolean = true;

  // Router for navigation
  // Character service for manipulation of character list
  constructor(private characterService: CharacterService,
              private router: Router) { }

  ngOnInit() {
  }

  // TODO
  // Check if this is necessary
  onSubmit(form): void {
    // get form name
    const name = form.charName;

    // create new character
    this.characterService.createCharacter(name);
  }

  // Navigate to the Character List page
  onReturnToCharList() {
    this.router.navigate(['/character-list']);
  }

  onCreateFields() {
    const formTag = document.getElementById('main_form');

    // Create main div and attach unique id
    const newDiv = document.createElement('div');
    const addDiv = newDiv as HTMLElement;
    addDiv.id = 'id' + this.counter;
    this.counter++;
    $(addDiv).addClass('row');
    formTag.appendChild(addDiv);

    // Create two divs to hold input values and attach
    // classes.
    const firstDiv = document.createElement('div');
    $(firstDiv).addClass('col display_list_border');
    const secondDiv = document.createElement('div');
    $(secondDiv).addClass('col display_list_border');

    addDiv.appendChild(firstDiv);
    addDiv.appendChild(secondDiv);

    // create inputs to take user data
    const firstInput = document.createElement('input');
    $(firstInput).addClass('text-center inputs');
    $(firstInput).prop('required', true);
    const secondInput = document.createElement('input');
    $(secondInput).addClass('text-center inputs');
    $(secondInput).prop('required', true);

    firstDiv.appendChild(firstInput);
    secondDiv.appendChild(secondInput);

    console.log(formTag);
  }

  onSaveCharacter() {
    // reset nameCheck
    this.nameCheck = true;

    // get name field
    const name = document.getElementById('nameField') as HTMLInputElement;
    const nameValue = name.value;

    // loop to get input fields
    const inputs = document.getElementsByClassName('inputs');
    let count = 0;
    // Two arrays necessary so that they can be sliced to avoid reference errors
    let tempArray = [];
    let realArray = [];

    // check if the name field is empty
    if (this.characterService.emptpyName(nameValue)) {
      this.nameCheck = false;
      return;
    }
    
    const char: Character = new Character(
      this.characterService.generateUniqueId(), nameValue, []
    );

    console.log(char.getAttributes());
    // tslint:disable-next-line: forin
    for (let i = 0; i < inputs.length; i++) {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      tempArray.push((inputs[i] as HTMLInputElement).value);
      // MUST slice array or reference error
      realArray.push(tempArray.slice(0));

      // clear temp arrayd
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
    this.router.navigate(['/character-confirmation']);
  }

  // -------------- CHAR TEMPLATES ------------------

  createWarrior() {
    this.counter = 0;
    $('.row').remove();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();

    $('#id0 input').first().val('Health');
    $('#id1 input').first().val('Strength');
    $('#id2 input').first().val('Rage');
    $('#id3 input').first().val('Endurance');
  }

  createMage() {
    this.counter = 0;
    $('.row').remove();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();

    $('#id0 input').first().val('Health');
    $('#id1 input').first().val('Magic');
    $('#id2 input').first().val('Intelligence');
    $('#id3 input').first().val('Wisdom');
  }

  createPriest() {
    this.counter = 0;
    $('.row').remove();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();
    this.onCreateFields();

    $('#id0 input').first().val('Health');
    $('#id1 input').first().val('Magic');
    $('#id2 input').first().val('Serenity');
    $('#id3 input').first().val('Discipline');
  }

  onRemoveFields() {
    this.counter = 0;
    $('.row').remove();
  }

  onReturnCharList() {
    this.router.navigate(['/character-list']);
  }

  onAddDice(event) {
    // get button ID for dice
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    // Main form tag
    const formTag = document.getElementById('main_form');
    
    // for each case, create image and number of dice (plus minut icon would be nice)
    switch(+value) {
      case 6:
        // Created elements
        const newDiv = document.createElement('div');
        const addDiv = newDiv as HTMLElement;
        const first = document.createElement('div');
        const leftDiv = first as HTMLElement;
        const nImg = document.createElement('img');
        const conImg = nImg as HTMLImageElement;

        // Add stuff
        addDiv.id = 'idDice' + this.counterDice;
        this.counterDice++;
        conImg.src = '../assets/dice/six-sided.png';
        $(addDiv).addClass('row');
        $(leftDiv).addClass('width_check');
        $(leftDiv).addClass('col');
        conImg.classList.add('six_dice');
               
        // Attach
        formTag.appendChild(conImg);

        //addDiv.appendChild(leftDiv);
        //leftDiv.appendChild(conImg);

        // check
        console.log(formTag);

        // code implement
        break;
      case 8:
        // code
        break;
      case 10:
        // code
        break;
      case 20:
        // code
        break;
      default:
        // code

    }
  }

}
