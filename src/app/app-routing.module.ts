import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GethelpComponent } from './gethelp/gethelp.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'forgotpass', component: ForgotpasswordComponent},
  {path: 'help', component: GethelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
