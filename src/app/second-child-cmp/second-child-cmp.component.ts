import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-child',
  templateUrl: './second-child-cmp.component.html' 
})
export class SecondChild implements OnInit {

  picture="/assets/images/1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}