import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';





@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  apiData:any;
  projectdata:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getdata().subscribe((response: any) => {
      this.apiData = response;
    });

   
    }
  }

  


