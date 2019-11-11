import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
  topCourse:any;
  loggedin: any;
//rate:number;
  constructor(private coursesService: CoursesService,private userService: UserService) { }

  ngOnInit() {
  
    this.loggedin = this.userService.loggedIn();
    this.coursesService.getTopRate().subscribe((res:any) =>{
      console.log('top rate')
      this.topCourse = res;
     
      console.log(res);
    });
  }

}
