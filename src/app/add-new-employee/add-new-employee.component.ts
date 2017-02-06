import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeClass } from '../employee-class';

@Component({
  selector: 'ep-add-new-employee',
  templateUrl: './add-new-employee.component.html'
})
export class AddNewEmployeeComponent implements OnInit {
   c1: EmployeeClass[] = [];
   myForm: FormGroup;
  constructor(private add: EmployeeService) {
    
    this.myForm = new FormGroup({
      'employeeId': new FormControl('', [Validators.required]),
      'EmployeeName': new FormControl('', [Validators.required]),
      'dateOfJoining': new FormControl('', [Validators.required]),
      'Designation': new FormControl(''),
      'Band': new FormControl('')
   
    });
  }
 
  onAdd(){
    let str = this.myForm.value;    
    console.log(str);
    this.add.addNew( str ); 
    
  }

  ngOnInit() {
  }

}
