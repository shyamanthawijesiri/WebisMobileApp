import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken: any;
  user: {};
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  // register user
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url+'/users/register',user,{headers:headers}).pipe(map((res:any)=>res));
  }

  // login user
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.url+'/users/authenticate',user,{headers:headers}).pipe(map((res:any)=>res));
  }

  // users loggedIn
   loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }
 // user logout
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
    console.log(localStorage.getItem('id_token'));
  }

  storeUserData(token,user){

    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
    // console.log(user);

  }
  loadToken(){
    const token=localStorage.getItem('user');
    return JSON.parse(token)
   // this.authToken=token;
  }

  // get user details
  getUser(id: string){
    return this.http.get(environment.url+'/users/particularUser/' + id);
  }

  
 // update account
  updataAccount(user,id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(environment.url+'/users/update/'+id,user,{headers:headers}).pipe(map((res:any)=>res));

  }

  changePassword(restpassword, id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(environment.url+'/users/editUserProfile/' + id, restpassword,{headers:headers}).pipe(map((res:any)=>res));
  }

  // upload a image
  uploadImage(selectedFile: File,id: string){
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    return this.http.post(environment.url+'/users/uploadUserImage/'+id,fd).pipe(map((res:any)=>res));
  
  }



  getRegisteredCourse(id: string){
    return this.http.get(environment.url+'/users/' + id);
  }

  
  deleteAccount(id: string,password){
    return this.http.delete(environment.url + '/users/remove/'+id+'/'+password).pipe(map((res:any)=>res));
}

}
