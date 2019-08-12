import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsePage } from '../browse/browse.page';
import { SigninPage } from './signin.page';


const routes: Routes = [
    {

        path : 'browse-tabs',
            component: SigninPage,
            children: [
    
                // {
                //     path: 'featured', children: [
                //         {
                //             path: '',
                //             loadChildren: '../featured/featured.module#FeaturedPageModule'
                //         }
                //     ]
                // },
                {
                    path: '',
                    redirectTo: '/browse/browse-tabs/settings',
                    pathMatch: 'full'
                  }
            ]
    }

]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SigninRoutingModule { }
