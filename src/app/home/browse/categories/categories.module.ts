import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';
import { ExpandableComponent } from '../../../component/expandable/expandable.component';
//import { CategoriesRoutingModule } from './categroies-routing.module';


const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //CategoriesRoutingModule
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesPage,ExpandableComponent]
})
export class CategoriesPageModule {}
