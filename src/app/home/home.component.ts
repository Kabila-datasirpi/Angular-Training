import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  authToken!: string;
  eye: boolean = false;
constructor(private formBuilder: FormBuilder,private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)]]
    });
  }

 
  onSubmit() {
  
    if (this.loginForm.valid) {
   console.log(this.loginForm.value);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post("http://localhost:8090/auth/login", {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
  }, { headers: headers }).subscribe(res => {
    console.log(res);
    
  
   
   
   
    
  })
    this.router.navigate(['/dashboard/table']);
    }
  }
 togglePassword() {
    
    this.showPassword = !this.showPassword;
  }
  
}
