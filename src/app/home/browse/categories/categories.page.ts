import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  loadedCourse: any;
  itemExpand: boolean = true;
  itemExpandHeight: number = 200;

  constructor(private coursesService: CoursesService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(response =>{
      this.loadedCourse=response;
      console.log(response);
    });
    
    
    
  }

  seExpande(){
    if(this.itemExpand==true){
      this.itemExpand=false;
    }else{
      this.itemExpand=true;
    }
  }
  getVlaue(i){
    console.log(i);
  }
  



}
