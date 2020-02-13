import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  comparisonNumber: number = 2;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  resetCountClick() {
    this.clickCounter = 0;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > this.comparisonNumber,
      inactive: this.clickCounter <= this.comparisonNumber,
    };

    return myClasses;
  }
}
