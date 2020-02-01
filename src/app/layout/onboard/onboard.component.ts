import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('OnboardComponent');
  }

}
