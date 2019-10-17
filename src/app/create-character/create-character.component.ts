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

  character: Character[];


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

}
