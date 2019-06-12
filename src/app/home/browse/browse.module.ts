import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrowsePage } from './browse.page';
import { BrowserRoutingModule } from './browse-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserRoutingModule

  ],
  declarations: [BrowsePage]
})
export class BrowsePageModule {}
