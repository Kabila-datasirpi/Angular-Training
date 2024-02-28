import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restcomponent',
  templateUrl: './restcomponent.component.html',
  styleUrls: ['./restcomponent.component.css']
})
export class RestcomponentComponent implements OnInit {
  public getJsonValue : any;
  public postJsonValue : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }
  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data =>{
      console.log(data);
      this.getJsonValue = data;
    });
  }
  public postMethod(){
    let body = {
      title : 'Rest-api',
      body : 'cat',
      userId : 2,
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos',body).subscribe((data) =>{
      console.log(data);
      this.postJsonValue = data;
    });
  }

}
