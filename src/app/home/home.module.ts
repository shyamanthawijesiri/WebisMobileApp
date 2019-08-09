import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';

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
  // HomeRoutingModule,
   RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
