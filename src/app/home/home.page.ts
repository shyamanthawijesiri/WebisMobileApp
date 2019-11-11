import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    loggedin:any;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.loggedin = this.userService.loggedIn();
  }

   goBrowse() {
     this.router.navigateByUrl('/browse');
   }

   goSignIn() {
     this.router.navigateByUrl('/signin')
   }
}
