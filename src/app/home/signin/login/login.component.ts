import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private modalCtrl: ModalController,private fb: FormBuilder,private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    

    }


  

  onCancel(){
    this.modalCtrl.dismiss();
  }
  

  onLogin(){
    this.userService.authenticateUser(this.loginForm.value).subscribe(res =>{
      if(res.success){
        this.userService.storeUserData(res.token, res.user);
        console.log('login');
        this.onCancel();
        this.router.navigateByUrl('/browse/browse-tabs/settings');
      }else{
        console.log('error');
      }
    })
  }

}
