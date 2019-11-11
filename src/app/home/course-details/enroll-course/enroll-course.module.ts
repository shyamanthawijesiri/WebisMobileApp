import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from "ionic-rating";

import { IonicModule } from '@ionic/angular';

import { EnrollCoursePage } from './enroll-course.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollCoursePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnrollCoursePage]
})
export class EnrollCoursePageModule {}
