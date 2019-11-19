import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'browse', loadChildren: './home/browse/browse.module#BrowsePageModule' },
  { path: 'signin', loadChildren: './home/signin/signin.module#SigninPageModule' },
  {path: 'search', loadChildren: './home/search/search.module#SearchPageModule'},
  //{ path: 'categories', loadChildren: './home/browse/categories/categories.module#CategoriesPageModule' },
   { path: ':course-details', loadChildren: './home/course-details/course-details.module#CourseDetailsPageModule' },
   { path: ':courseId/enroll-course', loadChildren: './home/course-details/enroll-course/enroll-course.module#EnrollCoursePageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
