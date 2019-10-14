import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-no-component-found',
  templateUrl: './no-component-found.component.html',
  styleUrls: ['./no-component-found.component.css']
})
export class NoComponentFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }

}
