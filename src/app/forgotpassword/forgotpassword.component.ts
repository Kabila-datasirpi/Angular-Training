
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  http: any;
 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      newPassword: ['', [Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)]],
      confirmPassword:['', [Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)]]
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.httpClient.put("http://localhost:8090/auth/forgot-password", {
      "email": this.loginForm.value.email,
      "newPassword": this.loginForm.value.newPassword,
      "confirmPassword":this.loginForm.value.confirmPassword

  }, { headers: headers }).subscribe((res: any) => {
    console.log(res);
    
  })
  }

 
}
}