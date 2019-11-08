import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.page.html',
  styleUrls: ['./mycourses.page.scss'],
})
export class MycoursesPage implements OnInit {
  pass: any;
  courses: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.pass = this.userService.loadToken();
      this.userService.getRegisteredCourse(this.pass.id).subscribe(res =>{
        this.courses = res;
      console.log(res);
      });
  }

}
