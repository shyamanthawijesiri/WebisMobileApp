import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.page.html',
  styleUrls: ['./enroll-course.page.scss'],
})
export class EnrollCoursePage implements OnInit {
  videos = [];
  constructor(private a : DomSanitizer) { }

  ngOnInit() {
    this.videos.push(this.a.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+'Hnh0NtGtSuM'+'?enablejsapi=1'));
  }

}
