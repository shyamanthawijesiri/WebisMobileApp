import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  getCourses(){
    // const course=this.http.get("http://localhost:3000/course/display");
     const course=this.http.get("http://localhost:3000/catergory/display");
   
     console.log(course);
     console.log("MMMMMMMMMMMMMMM")
     return course;
   
   }
}
