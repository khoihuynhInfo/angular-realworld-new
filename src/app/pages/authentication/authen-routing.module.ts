import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const authenCenterRounter: Routes = [
  { path: 'authen', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(
      authenCenterRounter,
    )
  ],
})
export class AuthenRoutingModule {}
