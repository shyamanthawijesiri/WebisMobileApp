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
  loadedSubCourses:any;
  itemExpand: boolean = true;
 // itemExpandHeight: number = 200;
  automaticClose = true;
  constructor(private coursesService: CoursesService, private toastCtrl: ToastController) { }

  ngOnInit() {
    //get main catergory
    this.coursesService.getCourses().subscribe(response =>{
      this.loadedCourse=response;
      console.log(response);
    });
    
    
    
  }
  //auto close and open
  toggleSection(index){
    this.loadedCourse[index].open = !this.loadedCourse[index].open;

    if(this.automaticClose && this.loadedCourse[index].open){
      this.loadedCourse
      .filter((item,itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }

  }
  //get sub catergory
  onSelect(courseName: string){
    this.coursesService. getSubcourses(courseName).subscribe(response => {
      this.loadedSubCourses=response;
      


    });
  }






}
