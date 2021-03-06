import { Component, OnInit,} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CoursesService } from '../../../services/courses.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  loadedCourse: any;
  loadedSubCourses:any;
  itemExpand: boolean = true;
  loggedin: boolean;
  search:string;
 // itemExpandHeight: number = 200;
 i: number;
  automaticClose = true;
  constructor(private coursesService: CoursesService,
              private toastCtrl: ToastController,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    //get main catergory
    this.coursesService.getCourses().subscribe(response =>{
      this.loadedCourse=response;
      console.log(response);
    });
    this.loggedin = this.userService.loggedIn();
    
    
  }
  //auto close and open
  toggleSection(index){
    // setTimeout(() => {
    // },530)
    this.loadedCourse[index].open = !this.loadedCourse[index].open;

    if(this.automaticClose && this.loadedCourse[index].open){
      this.loadedCourse
      .filter((item,itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
    

  }

  //get sub catergory
  onSelect(courseName: string,index){
    this.coursesService. getSubcourses(courseName).subscribe(response => {
      this.loadedSubCourses=response;
      this.loadedCourse[index].open = !this.loadedCourse[index].open;

      if (this.automaticClose && this.loadedCourse[index].open){
      this.loadedCourse
      .filter((item,itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
    });
  }


  
  onSearch(){
    this.coursesService.searchCourse(this.search).subscribe(res=> {
  
      this.coursesService.sCourse.emit(res);
     });
    this.router.navigateByUrl('/search')
  }









}
