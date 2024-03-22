import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GethelpComponent } from './gethelp/gethelp.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { TabledataComponent } from './tabledata/tabledata.component';



const routes: Routes = [
  { path: 'login', component: HomeComponent, },
  { path: 'dashboard', component: DashboardComponent, 
  children:[ {path: 'request', component:CreateRequestComponent},
  {path: 'table', component:TabledataComponent}
]},
  {path: 'forgotpass', component: ForgotpasswordComponent},
  {path: 'help', component: GethelpComponent},
 
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
