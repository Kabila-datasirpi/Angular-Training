import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  data="childdata";
  data2="childdata2"
  constructor() { }

  ngOnInit(): void {
  }

}
