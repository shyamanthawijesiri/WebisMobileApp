import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
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
  constructor(private modalCtrl: ModalController,
              private fb: FormBuilder,
              private userService: UserService, 
              private router: Router,
              private toast: ToastController) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      role: ['student', Validators.required]
    })
    

    }

    async failedLogin() {
      const toast = await this.toast.create({
        message: 'Login Failed',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }
    async successLogin() {
      const toast = await this.toast.create({
        message: 'Login Successfully',
        color: 'success',
        duration: 2000
      });
      toast.present();
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
        this.successLogin();
      }else{
        console.log('error');
        this.failedLogin()
      }
    })
  }

}
