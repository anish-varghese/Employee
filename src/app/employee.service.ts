import { Injectable } from '@angular/core';
import { EmployeeClass } from './employee-class'

@Injectable()
export class EmployeeService {

  employeeList: EmployeeClass[] = [

    new EmployeeClass(100, 'ani', '2010-10-30', 'Developer', 'A'),
    new EmployeeClass(101, 'anu', '2010-08-25', 'Testing', 'A'),
    new EmployeeClass(102, 'amal', '2011-07-06', 'Developer', 'A'),
    new EmployeeClass(103, 'reenu', '2012-11-28', 'Developer', 'B'),
    new EmployeeClass(104, 'hemanth', '2015-05-10', 'Marketing', 'B'),
    new EmployeeClass(105, 'anusree', '2000-03-05', 'Testing', 'B'),
    new EmployeeClass(106, 'ann', '2011-06-06', 'Testing', 'C'),
    new EmployeeClass(107, 'vishnupriya', '2008-08-06', 'Marketing', 'C'),
    new EmployeeClass(108, 'anish', '2012-10-10', 'Marketing', 'C')
  ];

  searchEmployee: EmployeeClass[] = [];
  constructor() {
    
  }

  getEmployee() {
    return this.employeeList;
  }
  searchResult() {
    return this.searchEmployee;
  }
  addNew(c) {
    console.log(c);
    this.employeeList.push(new EmployeeClass(c.employeeId, c.EmployeeName, c.dateOfJoining, c.Designation, c.Band));
    console.log(this.employeeList);
  }
}
