import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'browse', loadChildren: './home/browse/browse.module#BrowsePageModule' },
  { path: 'signin', loadChildren: './home/signin/signin.module#SigninPageModule' },
  { path: 'categories', loadChildren: './home/browse/categories/categories.module#CategoriesPageModule' },
  { path: 'display-course', loadChildren: './home/browse/categories/display-course/display-course.module#DisplayCoursePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
