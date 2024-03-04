import { Component } from '@angular/core';
import { MasterService } from './service/master.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-observables';
  
  status:any;
  constructor(private service:MasterService){
    this.service.statusInfo().subscribe(item=>this.status=item);
  }

}
