import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


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

   getSubcourses(catergory){

    console.log(catergory);
      // const course=this.http.get("http://localhost:3000/course/display");
      const course=this.http.get("http://localhost:3000/subCatergory/display/"+catergory);
    
       console.log(course);
       console.log("MMMMMMMMMMMMMMM")
       return course;
    
     }
     // get top rated course
     getTopRate(){

      return this.http.get('http://localhost:3000/course/highRated' );
    
    }

     getSubcourseDetails(subCatergory){
       return this.http.get("http://localhost:3000/subCatergory/"+subCatergory);
     }


  // display a full course
displaycourse(id: string){
  const course = this.http.get("http://localhost:3000/course/display/"+id);
  return course;

}

registerUserToCourse(course, id: string){
  const httpOption ={
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization' : localStorage.getItem('id_token')
  })
  };
  //let headers = new HttpHeaders();


   //headers.append('Authorization',localStorage.getItem('id_token'));
  return this.http.post('http://localhost:3000/course/registerCourse/'+id,course,httpOption).pipe(map((res:any)=>res));


}


}
