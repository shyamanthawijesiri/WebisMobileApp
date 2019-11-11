import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from "ionic-rating";

import { IonicModule } from '@ionic/angular';

import { DisplayCoursePage } from './display-course.page';
import { TopicShortenPipe } from 'src/app/pipe/topic-shorten.pipe';
import { SharedPipeModule } from 'src/app/pipe/sharedPipe.module';

const routes: Routes = [
  {
    path: '',
    component: DisplayCoursePage
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
  declarations: [DisplayCoursePage]
})
export class DisplayCoursePageModule {}
