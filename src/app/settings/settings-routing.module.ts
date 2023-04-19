import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'', redirectTo:'reset' , pathMatch:'full'},
  {path:'forget', component:ForgetPasswordComponent, title:'forget'},
  {path:'reset', component:ResetPasswordComponent, title:'reset'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
