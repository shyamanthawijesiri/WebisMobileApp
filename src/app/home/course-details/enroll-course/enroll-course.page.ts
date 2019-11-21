import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute , Params} from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.page.html',
  styleUrls: ['./enroll-course.page.scss'],
})
export class EnrollCoursePage implements OnInit {
  videos = [];
  courseId: {id: string };
  course: any;
  url: any;
  pass: any;
  name: string;
  vidName: string;
  loggedin: boolean;
  constructor(private a: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              private courseService: CoursesService,
              private userService: UserService) { }

  ngOnInit() {
    this.loggedin = this.userService.loggedIn();
    this.pass = this.userService.loadToken();
    this.courseId = {
      id: this.activatedRoute.snapshot.paramMap.get('courseId')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.courseId.id = params['courseId'];
      }
    );
    this.courseService.displaycourse(this.courseId.id).subscribe(res =>{
      this.course = res;
      console.log(res);
      console.log(res['firstVideoId'])
      this.url = this.a.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ res['firstVideoId'] +'?enablejsapi=1');
    })
  //  this.videos.push(this.a.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+'Hnh0NtGtSuM'+'?enablejsapi=1'));
  }

  setVideo(id,name,vidname){
    this.url = this.a.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ id +'?enablejsapi=1');
    console.log(this.url);
    this.name = name;
    this.vidName = vidname;

  }
 rate: number ;
  onRateChange(event){
    const rate = {
      courseId: this.courseId.id,
      star:  event,
      userId: this.pass.id
    }
    //console.log(event)
    console.log(this.rate)

    this.courseService.rateCourse(rate).subscribe((res:any) =>{
      if(res.state){
        console.log('success')
        console.log(res)
      }else{
       console.log(res);
        console.log('failed rate')
      }
   });
  }
 // alert(`Old Value:${$event.oldValue},

 //   New Value: ${$event.newValue},
 //   Checked Color: ${$event.starRating.checkedcolor},
 //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);


}
