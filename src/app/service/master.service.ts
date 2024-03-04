import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  statusInfo(){
    const deliveryStatus$= new Observable(item=>{
      item.next("Created")
      
      setTimeout(()=>{
        item.next("Order Processed")
      },2000);

      setTimeout(()=>{
        item.next("Order Confirmed")
      },4000);

      setTimeout(()=>{
        item.next("Out of delivery")
      },6000);

      setTimeout(()=>{
        item.next("Delivered")
      },8000);

    })
    return deliveryStatus$;
  }

}
