import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  message=""
  constructor(private myService: FirstserviceService) {
    this.message=this.myService.getData(); 
  }

  ngOnInit() {
    
  }

  }

