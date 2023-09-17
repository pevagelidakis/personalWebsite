import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { DialogComponent } from '../dialog/dialog.component';
import { UnaryOperatorExpr } from '@angular/compiler';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  })
export class ContactComponent {
  formData: FormGroup= this.builder.group({
    from_name:'',
    to_name:'Admin',
    email:'',
    subject:'',
    message:''
  });
  constructor(private builder: FormBuilder, private dialog: MatDialog) {} 
  private key = 'HR5zsKzrFJgEPZ_yi'
  async send(){
    emailjs.init(this.key);
    let response = await emailjs.send("service_o9q4a7y","template_86x77ai",{
      from_name: this.formData.value.from_name,
      to_name: "PanosEvagelidakis",
      email: this.formData.value.email,
      subject: this.formData.value.subject,
      message: this.formData.value.message
    });
    this.openDialog()
    this.formData.reset()
  }

  openDialog(){
    this.dialog.open(DialogComponent, {
      data:{name: this.formData.value.from_name}
      
    })
  }
}
  
