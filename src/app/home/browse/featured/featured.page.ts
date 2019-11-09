import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
  topCourse:any;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getTopRate().subscribe(res =>{
      console.log('top rate')
      this.topCourse = res;
      console.log(res);
    });
  }

}
