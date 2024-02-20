import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Input() parentName:string="";
 
  @Output() messageevent= new EventEmitter<string>();
  constructor() { }
  

  ngOnInit(): void {
  }
sendmessage(){
  this.messageevent.emit("hello");
}
}
