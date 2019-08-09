import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private modalCtrl: ModalController,private fb: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
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
        console.log('login');
      }else{
        console.log('error');
      }
    })
  }

}
