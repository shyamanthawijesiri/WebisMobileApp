import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.pass = this.userService.loadToken();

    this.userService. getUser(this.pass.id).subscribe(response => {
      this.userImg = response;

      console.log(response);

    //update details
      this.updateForm = this.fb.group({
        fname:['',Validators.required],
        lname:['',Validators.required],
      })
      
    });
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
      }else{
        console.log('updata failed');
      }
    });
    this.userService.uploadImage(this.selectedFile,this.pass.id);

  }



}
