import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
{
    path: 'tabs',
    component: HomePage,
    children: [
        {path: 'browse', children: [
            {
                path: '',
                loadChildren: './browse/browse.module#BrowsePageModule'
            }

        ]
    },

        {
            path: 'signin', children: [
            {
                path: '',
                loadChildren: './signin/signin.module#SigninPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/browse',
        pathMatch: 'full'
    }

    ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/browse',
        pathMatch: 'full'
    },  { path: 'course-details', loadChildren: './course-details/course-details.module#CourseDetailsPageModule' }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
