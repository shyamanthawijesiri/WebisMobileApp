import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedFile: File = null;
  user: any;
  pass:any
  updateForm: FormGroup;

  // password reset
  passwordrestForm: FormGroup;
  passwordMatch: boolean = true;
  loggedin: boolean;

  // delete account
  delPassword: string;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private toast: ToastController,
              private router: Router) { }

  ngOnInit() {
    this.loggedin = this.userService.loggedIn();
    this.pass = this.userService.loadToken(); 

    this.userService. getUser(this.pass.id).subscribe(response => {
      this.user = response;

      console.log(response);

    //update details
    
  });
    this.updateForm = this.fb.group({
        fname:['',Validators.required],
        lname:['',Validators.required],
      });

      // password reset
    this.passwordrestForm = this.fb.group({
        password : ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
  }

  async toastMsg(msg,color) {
    const toast = await this.toast.create({
      message: msg,
      color: color,
      duration: 2000
    });
    toast.present();
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    
  }
 
  onUpdate(){
    this.userService.updataAccount(this.updateForm.value, this.pass.id).subscribe(data =>{
      console.log('update');
      console.log(data.state);
      if(data.state){
        console.log('update success');
        this.toastMsg(data.mag,'success')
        window.location.reload();
      }else{
        console.log('updata failed');
        this.toastMsg(data.msg,'danger')
      }
    });
    
  }
  
  uploadImage(){
    this.userService.uploadImage(this.selectedFile,this.pass.id).subscribe(res=>{
      if(res.state){
        console.log('upload image succefully')
        this.toastMsg(res.msg,'success')
        window.location.reload();
      }else{
        console.log('upload failed')
        this.toastMsg(res.msg,'danger')
      }
    });

  }
 

  changePassword(){
    if(this.passwordrestForm.get('newPassword').value === this.passwordrestForm.get('confirmPassword').value){
        console.log(this.passwordrestForm.value)
        this.userService.changePassword(this.passwordrestForm.value, this.pass.id).subscribe(res => {
        if(res.state){
          console.log('change password successfully');
          this.toastMsg(res.msg,'success')

          console.log(res.msg)

        }else{
          console.log('failed to change password');
          console.log(res.msg);
          this.toastMsg(res.msg,'danger')

        }
      })

    }else{
      console.log('not matching')
      this.toastMsg('password doen\'t matching','danger');
     
    }



  }

  onDelete(){

    console.log(this.delPassword)
    console.log(this.pass.id)

    this.userService.deleteAccount(this.pass.id,this.delPassword).subscribe((res:any) =>{
      console.log(this.pass.id)
      console.log(this.delPassword)
      if(res.state){
        console.log('successfully delete')
        this.userService.logout();
        this.router.navigateByUrl('/home');


      }else{
        console.log('error delete')
        this.toastMsg(res.msg,'danger')
      }

    })

  }



}
