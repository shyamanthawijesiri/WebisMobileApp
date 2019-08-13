import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.page.html',
  styleUrls: ['./display-course.page.scss'],
})
export class DisplayCoursePage implements OnInit {
  loadedSubCourse: any;
  subCourse: any //{id: string}
  constructor(private courseService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    // this.subCourse = {
      // };
      this.subCourse = this.activatedRoute.snapshot.paramMap.get('subCategory');
      console.log(this.subCourse)
      
      this.courseService. getSubcourseDetails(this.subCourse).subscribe(response => {
        this.loadedSubCourse=response;
  
        console.log(response);
      });
      // this.activatedRoute.params.subscribe(
    //   (params: Params) => {
    //     this.subCourse.id = params['subCategory'];
    //   }
    // );
  }

}
