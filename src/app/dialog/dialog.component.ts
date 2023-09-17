import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog'
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialogConfig< {name: string}>) {}

  ngOnInit(): void {}
    
}
