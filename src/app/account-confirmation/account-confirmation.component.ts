import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-confirmation',
  templateUrl: './account-confirmation.component.html',
  styleUrls: ['./account-confirmation.component.css']
})
export class AccountConfirmationComponent implements OnInit {

  // Router for navigation
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // return the user to the Welcome page
  onNavigate() {
    this.router.navigate(['/welcome']);
  }

}
