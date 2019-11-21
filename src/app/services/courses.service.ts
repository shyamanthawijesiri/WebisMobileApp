import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  sCourse =new EventEmitter<any>();

  constructor(private http:HttpClient) { }

  getCourses(){
    // const course=this.http.get("http://localhost:3000/course/display");
     return this.http.get(environment.url+'/catergory/display');
   
 
   
   }

   getSubcourses(catergory){

    console.log(catergory);
      // const course=this.http.get("http://localhost:3000/course/display");
    return this.http.get(environment.url+'/subCatergory/display/'+catergory);

     
    
     }
     // get top rated course
     getTopRate(){

      return this.http.get(environment.url+'/course/highRated' );
    
    }

     getSubcourseDetails(subCatergory){
       return this.http.get(environment.url+'/subCatergory/' +subCatergory);
     }


  // display a full course
displaycourse(id: string){
  return this.http.get(environment.url+'/course/display/'+id);
  

}

registerUserToCourse(course, id: string){
  const httpOption ={
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization' : localStorage.getItem('id_token')
  })
  };
 


  return this.http.post(environment.url+'/course/registerCourse/'+id,course,httpOption).pipe(map((res:any)=>res));


}

rateCourse(rate){
  console.log(rate)
  return this.http.post(environment.url+'/course/rating' , rate).pipe(map((res:any)=>res));
}

searchCourse(value){
  return this.http.get(environment.url + '/course/search/' + value);
}


}
