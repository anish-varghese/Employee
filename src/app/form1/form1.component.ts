import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styles:[`
    .ng-invalid{
      border: 1px solid red;
    }
  `]
})
export class Form1Component {

  user = {
    username: '',
    password: ''
  };

onSubmit(form: NgForm){   
 this.user.username=form.value.username;
 this.user.password=form.value.password;
  };
   
   
 
 
}
