import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  loadedCourse: any

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    //d
    this.coursesService.getCourses().subscribe(response =>{
      this.loadedCourse=response;
      console.log(response);
    });
    
  }

}
