import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


export interface eqpDetail {
  selected: { start: any, end: any },
}

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  apiData: any;
  equipmentdata: any;
  createrequest: any;
  requestCreateForm!: FormGroup;
  httpClient: any;
  startdate!: string;
  enddate!: string;

  constructor(private apiService: ApiService, private fb: FormBuilder, private datePipe: DatePipe) {
    this.requestCreateForm = this.fb.group({
      ProjectName: [''],
      Notes: [''],
      EquipmentType: [''],
      Shift: [''],
      Fuel: [''],
      Operator: [''],
      Driver: [''],
      Duration: [''],
      durationfrom: [''],
      durationto: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getdata().subscribe((response: any) => {
      this.apiData = response;
    });

    this.apiService.getEquipmentdata().subscribe((equipmentres: any) => {
      this.equipmentdata = equipmentres;
    });
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }

 

  datesUpdated(range: any) {
    if (!range.startDate || !range.endDate) {
      return false;
    }
  
    const startDate = range.startDate.format('YYYY-MM-DD');
    const endDate = range.endDate.format('YYYY-MM-DD');
  
    // Set values to form controls
    this.requestCreateForm.get('durationfrom')!.setValue(startDate);
    this.requestCreateForm.get('durationto')!.setValue(endDate);
  
    return true; // Return true after setting the values
  }
  
  
  onSubmit() {
    console.log(this.requestCreateForm.value);
  }
  
}
