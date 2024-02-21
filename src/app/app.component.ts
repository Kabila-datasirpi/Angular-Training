import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  message="";
  message2="";
  @ViewChild(ChildComponent) childdata!:ChildComponent;
  ngAfterViewInit(): void {
    this.message=this.childdata.data
    this.message2=this.childdata.data2
  }
}
