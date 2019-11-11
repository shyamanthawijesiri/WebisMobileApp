import { Component, OnInit,Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
   loggedin: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.loggedin = this.userService.loggedIn();
  }

}
