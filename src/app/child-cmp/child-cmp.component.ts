import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.css']
})
export class ChildCmpComponent implements OnInit {

  arr=[10,20,30];
  constructor() { }

  ngOnInit(): void {
  }

}
