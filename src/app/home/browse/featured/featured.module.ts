import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from "ionic-rating";

import { IonicModule } from '@ionic/angular';

import { FeaturedPage } from './featured.page';

import { SharedPipeModule } from 'src/app/pipe/sharedPipe.module';
 
const routes: Routes = [
  {
    path: '',
    component: FeaturedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    SharedPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeaturedPage]
})
export class FeaturedPageModule {}
