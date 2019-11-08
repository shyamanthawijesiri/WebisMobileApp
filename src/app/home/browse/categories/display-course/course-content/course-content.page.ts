import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.page.html',
  styleUrls: ['./course-content.page.scss'],
})
export class CourseContentPage implements OnInit {
  courseId: string;
  loadedCourse: any;
  pass: any;
  constructor(private coursesService: CoursesService,private userService: UserService) { }

  ngOnInit() {
   // this.courseId = this.route.snapshot.paramMap.get('course-details');
    console.log(this.courseId)
    this.coursesService.displaycourse(this.courseId).subscribe(res =>{
     this.loadedCourse = res;
   });

   this.pass = this.userService.loadToken();
  }


  onRegistercourse(){
    const course ={
      userId : this.pass.id,
      courseId: this.courseId
    }

    this.coursesService.registerUserToCourse(course, this.courseId).subscribe(res =>{
      if(res.state){
        console.log('regiter successufly')
      }else{
        console.log('register failed')
      }
    })
  }
}
