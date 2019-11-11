import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentModule } from '../component/sharedComponent.module';

const routes: Routes = [
    {
      path: '',
      component: HomePage
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedComponentModule,
  // HomeRoutingModule,
   RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
