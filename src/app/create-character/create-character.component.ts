import { Character } from './../models/character.model';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCharacterComponent implements OnInit {

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
    // tslint:disable-next-line: forin
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].nodeName == 'IMG') {
        console.log('first-test')
        if (inputs[i].classList.contains('six')) {
          tempArray.push('6');
        } else  if (inputs[i].classList.contains('eight')) {
          tempArray.push('8');
        } else  if (inputs[i].classList.contains('ten')) {
          tempArray.push('10');
        } else if (inputs[i].classList.contains('twenty')) {
          tempArray.push('20');
        }
      } else {
        tempArray.push((inputs[i] as HTMLInputElement).value);
      }
      // tslint:disable-next-line: no-angle-bracket-type-assertion

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
    console.log(value);


    // for each case, create image and number of dice (plus minut icon would be nice)
    switch(+value) {
      case 6:
        this.createDice(value);
        break;
      case 8: 
      this.createDice(value);
        break;
      case 10:
          this.createDice(value)
        break;
      case 20:
        this.createDice(value)
        break;
      default:
        // code
    }
  }

  createDice(value) {
    // Main form tag
    const formTag = document.getElementById('main_form');

    // Created elements
    // Main
    const newDiv = document.createElement('div');
    const addDiv = newDiv as HTMLElement;
    // Left
    const first = document.createElement('div');
    const leftDiv = first as HTMLElement;
    const nImg = document.createElement('img');
    const conImg = nImg as HTMLImageElement;
    // Right
    const second = document.createElement('div');
    const rightDiv = second as HTMLElement;
    $(rightDiv).addClass('col display_list_border');
    const secondInput = document.createElement('input');
    $(secondInput).addClass('text-center inputs');
    $(secondInput).prop('required', true);
    $(conImg).addClass('inputs');

    addDiv.id = 'idDice' + this.counterDice;
    this.counterDice++;
    // Check dice value
    if (value == 6) {
      conImg.classList.add('dice');
      conImg.classList.add('six');
      conImg.src = '../assets/dice/six-sided.png';
    } else if (value == 8) {
      conImg.classList.add('dice');
      conImg.classList.add('eight');
      conImg.src = '../assets/dice/eight-sided.png';
    } else if (value == 10) {
      conImg.classList.add('dice');
      conImg.classList.add('ten');
      conImg.src = '../assets/dice/ten-sided.png';
    } else if (value == 20) {
      conImg.classList.add('dice');
      conImg.classList.add('twenty');
      conImg.src = '../assets/dice/twenty-sided.png';
    }

    $(addDiv).addClass('row');
    $(leftDiv).addClass('col');

    // Attach
    leftDiv.appendChild(conImg);
    addDiv.appendChild(leftDiv);
    rightDiv.appendChild(secondInput);
    addDiv.appendChild(rightDiv);
    formTag.appendChild(addDiv);
   
    console.log(formTag);

  }

}
