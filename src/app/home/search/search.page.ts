import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchCourse: any;
  loggedin: boolean;
  constructor(private coursesService: CoursesService, private userService: UserService) { }

  ngOnInit() {
    this.coursesService.sCourse.subscribe(res =>{
      this.searchCourse = res['arr'];
      console.log('hello')
      console.log(this.searchCourse);
      console.log('hello')
    })
    this.loggedin = this.userService.loggedIn();
  }

}
