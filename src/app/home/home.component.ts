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
 
constructor(private formBuilder: FormBuilder,private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.valid) {
    localStorage.setItem('email', this.loginForm.value.email);
    localStorage.setItem('password', this.loginForm.value.password);
    this.authToken=this.randomtoken()
    localStorage.setItem('authToken', this.authToken);
    console.log(this.loginForm.value);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    this.httpClient.post("http://localhost:8090/auth/login", {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
  }, { headers: headers }).subscribe(res => {
    console.log(res);
    
  })
    this.router.navigate(['/dashboard']);
    }
  }

  randomtoken(){
    const tokenLength = 32;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < tokenLength; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return token;
  }
}
