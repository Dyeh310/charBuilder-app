import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-confirmation',
  templateUrl: './edit-confirmation.component.html',
  styleUrls: ['./edit-confirmation.component.css']
})
export class EditConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    // Return the user to the character list screen
    onNavigate() {
      this.router.navigate(['/character-list']);
    }
}
