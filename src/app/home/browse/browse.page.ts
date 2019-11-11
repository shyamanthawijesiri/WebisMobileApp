import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {
  loggedin: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loggedin = this.userService.loggedIn();
  }

}
