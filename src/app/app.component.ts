import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name:string="";

  //  output decorator
  
  tempdata:string="";
   
  newMessage($event:any){
    this.tempdata=$event;
   }
}
