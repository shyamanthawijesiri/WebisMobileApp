import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


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
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers}).pipe(map((res:any)=>res));
  }

  // login user
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}).pipe(map((res:any)=>res));
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
    return this.http.get('http://localhost:3000/users/particularUser/' + id);
  }

  
 // update account
  updataAccount(user,id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/update/'+id,user,{headers:headers}).pipe(map((res:any)=>res));

  }

  changePassword(restpassword, id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/editUserProfile/' + id, restpassword,{headers:headers}).pipe(map((res:any)=>res));
  }

  // upload a image
  uploadImage(selectedFile: File,id: string){
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    return this.http.post('http://localhost:3000/users/uploadUserImage/'+id,fd).pipe(map((res:any)=>res));
  
  }



  getRegisteredCourse(id: string){
    return this.http.get('http://localhost:3000/users/' + id);
  }
}
