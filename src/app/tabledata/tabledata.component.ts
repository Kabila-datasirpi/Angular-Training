import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
  tableData: any;
  p:number=1;
  itemsPerPage!:number;
  totalproduct:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTableData().subscribe((tableResponse:any)=>{
      this.tableData=tableResponse;
      this.totalproduct=this.tableData.length;
      console.log(this.tableData);
      
    })
  }

}
