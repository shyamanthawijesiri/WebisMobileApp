import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsePage } from './browse.page';
import { DisplayCoursePage } from './categories/display-course/display-course.page';

const routes: Routes = [
    {
        path : 'browse-tabs',
        component: BrowsePage,
        children: [

            {
                path: 'featured', children: [
                    {
                        path: '',
                        loadChildren: './featured/featured.module#FeaturedPageModule'
                    }
                ]
            },
            {
                path: 'categories', children: [
                    {
                        path: '',
                        loadChildren: './categories/categories.module#CategoriesPageModule'
                    },
                    {
                        path:':subCategory',
                        loadChildren: './categories/display-course/display-course.module#DisplayCoursePageModule'
                    },
                ]
            },
            {
                path: 'mycourses', children: [
                    {
                        path: '',
                        loadChildren: './mycourses/mycourses.module#MycoursesPageModule'
                    }
                ]
            },
            {
                path: 'settings', children: [
                    {
                        path: '',
                        loadChildren: './settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/browse/browse-tabs/featured',
                pathMatch: 'full'
              }



        ]
    },

    {
      path: '',
      redirectTo: '/browse/browse-tabs/featured',
      pathMatch: 'full'
    },
    
//   {
//        path: 'display-course',
//        component: DisplayCoursePage, 
//        children: [
//                 {path:'',redirectTo: '/browse/display-course', pathMatch: 'full'},
//                 {path:'display-course', loadChildren:'./categories/display-course/display-course.module#DisplayCoursePageModule'}
//             ] 
//     }



];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrowserRoutingModule { }
