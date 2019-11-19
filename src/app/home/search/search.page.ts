import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchCourse: any;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.sCourse.subscribe(res =>{
      this.searchCourse = res['arr'];
      console.log('hello')
      console.log(this.searchCourse);
      console.log('hello')
    })
  }

}
