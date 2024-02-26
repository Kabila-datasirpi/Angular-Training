import { Component } from '@angular/core';
import { Form, FormBuilder,  } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'forms';
  
formData=[]
  constructor(private fb: FormBuilder) { 
    // result=this.signUpForm.value
   
  }
    
  signUpForm = this.fb.group({
    firstName: ['',],
    lastName: ['',],
    email:['',],
    password:['',],
    confirmPassword:['',]
    
  },);


  onSubmit(){
    if (this.signUpForm.valid){// this.result=this.signUpForm.value
      console.log(this.signUpForm.value)
    }
    else{
      // console.log("firstname is required")
      alert('please fill the required fields')
    }
    
  }
  
  }


