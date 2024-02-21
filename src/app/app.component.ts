import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'directives';
  isLoggedIn = true;
  username = 'John';
  items = ['apple','banana','cherry'];
  num:string='1'
}
