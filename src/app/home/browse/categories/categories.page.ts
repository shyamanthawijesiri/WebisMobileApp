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
  itemExpandHeight: number = 200;
  informatiion: any;
  automaticClose = true;
  constructor(private coursesService: CoursesService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(response =>{
      this.informatiion=response;
      console.log(response);
    });
    
    
    
  }
  
  toggleSection(index){
    this.informatiion[index].open = !this.informatiion[index].open;

    if(this.automaticClose && this.informatiion[index].open){
      this.informatiion
      .filter((itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }

  }
  onSelect(courseName: string){
    this.coursesService. getSubcourses(courseName).subscribe(response => {
      this.loadedSubCourses=response;
      


    });
  }


  // seExpande(){
  //   if(this.itemExpand==true){
  //     this.itemExpand=false;
  //   }else{
  //     this.itemExpand=true;
  //   }
  // }
  // getVlaue(i){
  //   console.log(i);
  //   this.loadedCourse[i].open = !this.loadedCourse[i].open;
  // }
  



}
