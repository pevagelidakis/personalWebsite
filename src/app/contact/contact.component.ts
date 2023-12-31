import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  })
export class ContactComponent {
  formData = new FormGroup({
    from_name: new FormControl('',[Validators.required]),
    to_name:new FormControl('Admin'),
    email:new FormControl('',[Validators.email]),
    subject:new FormControl(''),
    message:new FormControl('',[Validators.required]),
  });
  constructor(private dialog: MatDialog) {
    console.log(this.formData.errors)
  } 
  private key = 'HR5zsKzrFJgEPZ_yi'
  async send(){
    emailjs.init(this.key);
    let response = await emailjs.send("service_o9q4a7y","template_86x77ai",{
      from_name: this.formData.value.from_name,
      to_name: "PanosEvagelidakis", 
      email: this.formData.value.email,
      subject: this.formData.value.subject,
      message: this.formData.value.message,
    });
    this.openDialog()
    console.log(this.formData.errors)
    this.formData.reset()
  }

  openDialog(){
    this.dialog.open(DialogComponent,{
      data:{
        name: this.formData.value.from_name
      }
    })
  }
  isInvalidAddress(address:string) {
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address))
       {
         return false
       }
         return true
     }
     
  }
}
  
