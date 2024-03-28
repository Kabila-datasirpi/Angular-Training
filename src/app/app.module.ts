import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { GethelpComponent } from './gethelp/gethelp.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DatePipe } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    LoginComponent,
    GethelpComponent,
    CreateRequestComponent,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
        NgxDaterangepickerMd.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
