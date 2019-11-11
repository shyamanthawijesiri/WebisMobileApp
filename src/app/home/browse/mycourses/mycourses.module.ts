import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from "ionic-rating";
import { IonicModule } from '@ionic/angular';

import { MycoursesPage } from './mycourses.page';
import { SharedPipeModule } from 'src/app/pipe/sharedPipe.module';

const routes: Routes = [
  {
    path: '',
    component: MycoursesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPipeModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MycoursesPage]
})
export class MycoursesPageModule {}
