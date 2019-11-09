import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedFile: File = null;
  userImg: any;
  pass:any
  updateForm: FormGroup;

  // password reset
  passwordrestForm: FormGroup;
  passwordMatch: boolean = true;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private toast: ToastController) { }

  ngOnInit() {
    this.pass = this.userService.loadToken();

    this.userService. getUser(this.pass.id).subscribe(response => {
      this.userImg = response;

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
      console.log('matching');
     
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
     
    }



  }



}
