import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SigninPage } from './signin.page';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SigninRoutingModule } from './signin-routing.module';


const routes: Routes = [
  {
    path: '',
    component: SigninPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SigninRoutingModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [SigninPage, SignupComponent,LoginComponent],
  entryComponents:[SignupComponent, LoginComponent]
})
export class SigninPageModule {}
