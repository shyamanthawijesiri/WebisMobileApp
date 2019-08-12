import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.page.html',
  styleUrls: ['./display-course.page.scss'],
})
export class DisplayCoursePage implements OnInit {
  loadedSubCourse: any;
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    // this.courseService. getSubcourses().subscribe(response => {
    //   this.loadedSubCourse=response;

    //   console.log(response);
    // });
  }

}
