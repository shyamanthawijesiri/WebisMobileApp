import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  courseId: string;
  loadedCourse: any;
  pass: any;
  loggedin : boolean;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private userService: UserService,
              private toast: ToastController,
              private router: Router) { }
 
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('course-details');
    console.log(this.courseId)
    this.coursesService.displaycourse(this.courseId).subscribe(res =>{
     this.loadedCourse = res;
     console.log(res)
   });

   this.pass = this.userService.loadToken();
   this.loggedin = this.userService.loggedIn();
  }

  get userLoggedIn(){
    return this.userService.loggedIn()
  }



  onRegistercourse(){
    const course ={
      userId : this.pass.id,
      courseId: this.courseId
    }

    this.coursesService.registerUserToCourse(course, this.courseId).subscribe(res =>{
      if(res.state){
        console.log('regiter successufly')
        this.toastMsg(res.msg, 'dark')
        this.router.navigateByUrl('/'+this.courseId+'/enroll-course')
        
      }else{
        console.log('register failed')
        this.router.navigateByUrl('/'+this.courseId+'/enroll-course')
        this.toastMsg(res.msg, 'danger')
      }
    })
  }

  
  async toastMsg(msg, msgColor) {
    const toast = await this.toast.create({
      message: msg,
      color: msgColor,
      duration: 2000
    });
    toast.present();
  }

}
