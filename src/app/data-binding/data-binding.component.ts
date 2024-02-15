import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //One way binding
  firstName : string = 'kabila'
  lastName = 'Murugan'

  //Two way binding
  title = 'Game of thrones'

  //Event Binding
  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }
  

}
