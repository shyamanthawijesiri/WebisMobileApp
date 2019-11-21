import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
 signupForm: FormGroup;
//  firstName:string;
//  lastName:string;
//  email:string;
//  password:string;
  constructor(private modalCtrl: ModalController,
              private fb: FormBuilder, 
              private userService: UserService,
              private toast: ToastController) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      
      fname: ['', [ Validators.required, Validators.minLength(4) ]],
      lname: ['', [ Validators.required , Validators.minLength(4) ]],
      email: ['', [ Validators.required, Validators.minLength(4) ]],
      password: ['', [ Validators.required, Validators.minLength(4) ]],
      role: ['student',  Validators.required],
    });
  }


  onCancel(){
    this.modalCtrl.dismiss();
  }
async onLogin(){
    const modal = await this.modalCtrl.create({
      component: LoginComponent ,
      componentProps: { value: 123 }
    });
    return await modal.present();

  }

  // tost message

  async successSignup() {
    const toast = await this.toast.create({
      message: 'Register successfully',
      color: 'dark',
      duration: 2000
    });
    toast.present();
  }

  async failedSignup() {
    const toast = await this.toast.create({
      message: 'Register failed',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  onSignup(){

    this.userService.registerUser(this.signupForm.value).subscribe(res =>{
     
      if(res.state){
        this.onCancel();
        this.onLogin();
        this.successSignup()
       // this.router.navigateByUrl('/login');
        console.log('signup successfully')

      }else{
        this.failedSignup()
        console.log('signup failed')
      }
    })

  }

}
