import { Component, OnInit } from '@angular/core';

import { EmployeeClass } from '../employee-class';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'ep-view-all',
  templateUrl: './view-all.component.html'
})
export class ViewAllComponent implements OnInit {

  c1: EmployeeClass[] = [];
  constructor(private add: EmployeeService) {
    this.c1 = this.add.getEmployee();
  }

  viewAllFn() {
    this.c1 = this.add.searchResult();
  }

  ngOnInit() {
    //this.c1 = this.add.searchResult();
  }
}
