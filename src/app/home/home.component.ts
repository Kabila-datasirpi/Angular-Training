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
 
constructor(private formBuilder: FormBuilder,private router: Router) { }

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
