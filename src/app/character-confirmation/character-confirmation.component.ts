import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-confirmation',
  templateUrl: './character-confirmation.component.html',
  styleUrls: ['./character-confirmation.component.css']
})
export class CharacterConfirmationComponent implements OnInit {

  // Router for navigation
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Return the user to the character list screen
  onNavigate() {
    this.router.navigate(['/character-list']);
  }

}
