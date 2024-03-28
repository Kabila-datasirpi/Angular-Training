import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


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

  constructor(private apiService: ApiService, private fb: FormBuilder, private datePipe: DatePipe,private router: Router) {
    this.requestCreateForm = this.fb.group({
      projectId :[''],
      projectName: [''],
      requisitionNote: [''],
      equipmentType: [''],
      shift: [''],
      fuel: [''],
      operator: [''],
      driver: [''],
      // duration: [''],
      durationFrom: [''],
      durationTo: [''],
    });
  }

  // ngOnInit(): void {
  //   this.apiService.getdata().subscribe((response: any) => {
  //     this.apiData = response;
  //   });

  //   this.apiService.getEquipmentdata().subscribe((equipmentres: any) => {
  //     this.equipmentdata = equipmentres;
  //   });
  // }

  ngOnInit(): void {
    this.apiService.getdata().subscribe((response: any) => {
      this.apiData = response;
      console.log(this.apiData);
      
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
    this.requestCreateForm.get('durationFrom')!.setValue(startDate);
    this.requestCreateForm.get('durationTo')!.setValue(endDate);
  
    return true; // Return true after setting the values
  }
  
  
  onSubmit() {
    this.requestCreateForm.get('projectId')!.setValue(this.requestCreateForm.get('projectName')?.value);
   const data=this.requestCreateForm.value;
   this.apiService. postreqdata(data).subscribe(reqresponse => {
    console.log('Response:', reqresponse);
    this.router.navigate(['/dashboard/table']);  
  });
  

  
  }
  
}
