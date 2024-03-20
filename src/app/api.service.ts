import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    
   }
  getdata(){
    return this.http.get(`${environment.baseUrl}/project`); 
    }
    getEquipmentdata(){
      return this.http.get(`${environment.baseUrl}/equipment`); 
      }
  }

