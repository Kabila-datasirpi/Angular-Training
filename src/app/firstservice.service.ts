import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
  getData() {
    return 'some data';
  }

  constructor() { }
}
