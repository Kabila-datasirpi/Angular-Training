import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title = "demo";
currentDate: Date = new Date();
jsondata: any = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};
myNumber: number = 0.23;
myString: string = 'this is a sentence in lowercase.';
sentence: string = 'This is a long string.';
}
