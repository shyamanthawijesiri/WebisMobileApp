import { Component, OnInit } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onSignUp() {
    const modal = await this.modalCtrl.create({
      component: SignupComponent ,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async onLogin(){
    const modal = await this.modalCtrl.create({
      component: LoginComponent ,
      componentProps: { value: 123 }
    });
    return await modal.present();

  }
}
