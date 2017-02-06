import { Injectable } from '@angular/core';
import { EmployeeClass } from './employee-class'

@Injectable()
export class EmployeeService {

employeeList:EmployeeClass[]=[
  {employeeId:100, employeeName:'ani', dateJoining:'2010-10-30', designation:'Developer', band:'A'},
  {employeeId:101, employeeName:'anu', dateJoining:'2010-08-25', designation:'Testing', band:'A'},
  {employeeId:102, employeeName:'amal', dateJoining:'2011-07-06', designation:'Developer', band:'A'},
  {employeeId:103, employeeName:'reenu', dateJoining:'2012-11-28', designation:'Developer', band:'B'},
  {employeeId:104, employeeName:'hemanth', dateJoining:'2015-05-10', designation:'Marketing', band:'B'},
  {employeeId:105, employeeName:'anusree', dateJoining:'2000-03-05', designation:'Testing', band:'B'},
  {employeeId:106, employeeName:'ann', dateJoining:'2011-06-06', designation:'Testing', band:'C'},
  {employeeId:107, employeeName:'vishnupriya', dateJoining:'2008-08-06', designation:'Marketing', band:'C'},
  {employeeId:108, employeeName:'anish', dateJoining:'2012-10-10', designation:'Marketing', band:'C'}
];

  searchEmployee: EmployeeClass[]=[];
  constructor() { }
  
  getEmployee(){
    return this.employeeList;
  }
  searchResult(){
    return this.searchEmployee;
  }
}

