import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeClass } from '../employee-class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'ep-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchby: String[] = ["Employee Number", "Employee Name", "Designation", "Date Of Joining", "Band"];

  filterOperator: String[] = [];
  c1: EmployeeClass[] = [];
  c2: EmployeeClass[] = [];
  searchVar: string;
  filterVar: string;
  type: string = 'text';
  hideFlag = false;

  myForm: FormGroup;
  constructor(private add: EmployeeService) {
    this.c1 = this.add.getEmployee();
    this.myForm = new FormGroup({
      'search': new FormControl('', [Validators.required]),
      'toDate': new FormControl('', [Validators.required])
    });
  }
  onChangeSearch(val) {
    let str = this.myForm.value;
    console.log(str);
    str.search = '';
    this.hideFlag = false;
    this.searchVar = val;
    this.type = 'text';
    if (val == 'Employee Number') {
      this.type = 'number';
      this.filterOperator = ["<", ">", "<=", ">=", "=", "<>"];
    }
    else if (val == 'Employee Name') {
      this.filterOperator = ["=", "<>", "LIKE"];
    }
    else if (val == 'Designation') {
      this.filterOperator = ["IS", "IS NOT"];
    }
    else if (val == 'Date Of Joining') {
      this.type = 'date';
      this.filterOperator = ["BETWEEN", "=", ">=", "<=", ">", "<"];

    }
    else if (val == 'Band') {
      this.filterOperator = ["IS", "IS NOT"];
    }
    else {
      this.filterOperator = [];
    }

  }

  onChangeFilter(va) {
    this.hideFlag = false;
    this.filterVar = va;
    if (va == 'BETWEEN') {
      this.hideFlag = true;
    }
  }

  onClick() {
    this.c1 = [];
    this.c2 = this.add.getEmployee()
    let str = this.myForm.value;
    let flag = 0;
    if (this.searchVar == 'Employee Number') {
      switch (this.filterVar) {
        case '<':
          for (let emp of this.c2) {
            if (emp.employeeId < str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '>':
          for (let emp of this.c2) {
            if (emp.employeeId > str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '<=':
          for (let emp of this.c2) {
            if (emp.employeeId <= str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '>=':
          for (let emp of this.c2) {
            if (emp.employeeId >= str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '=':
          for (let emp of this.c2) {
            if (emp.employeeId == str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '<>':
          for (let emp of this.c2) {
            if (emp.employeeId != str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
      }
      if (flag == 0) { alert("Not found"); }
    }
    else if (this.searchVar == 'Employee Name') {
      let flag = 0;
      switch (this.filterVar) {
        case '=':
          for (let emp of this.c2) {
            if (emp.employeeName == str.search) {
              flag = 1;
              this.c1.push(emp);
            }

          } break;
        case '<>':
          for (let emp of this.c2) {
            if (emp.employeeName != str.search) {
              flag = 1;
              this.c1.push(emp);
            }

          } break;
        case 'LIKE':
          for (let emp of this.c2) {
            if ((emp.employeeName.search(str.search)) >= 0) {
              flag = 1;
              this.c1.push(emp);

            }

          } break;
      }
      if (flag == 0) { alert("Not found"); }
    }
    else if (this.searchVar == 'Designation') {
      let flag = 0;
      switch (this.filterVar) {
        case 'IS':
          for (let emp of this.c2) {
            if (emp.designation == str.search) {
              flag = 1;
              this.c1.push(emp);
            }

          } break;
        case 'IS NOT':
          for (let emp of this.c2) {
            if (emp.designation != str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
      }
      if (flag == 0) { alert("Not found"); }
    }
    else if (this.searchVar == 'Band') {
      let flag = 0;
      switch (this.filterVar) {
        case 'IS':
          for (let emp of this.c2) {
            if (emp.band == str.search) {
              flag = 1;
              this.c1.push(emp);
            }

          } break;
        case 'IS NOT':
          for (let emp of this.c2) {
            if (emp.band != str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
      }
      if (flag == 0) { alert("Not found"); }
    }
    else if (this.searchVar == 'Date Of Joining') {
      let flag = 0;
      switch (this.filterVar) {
        case '=':
          for (let emp of this.c2) {
            if (emp.dateJoining == str.search) {
              flag = 1;
              this.c1.push(emp);
            }

          } break;
        case '<':
          for (let emp of this.c2) {
            if (emp.dateJoining < str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '>':
          for (let emp of this.c2) {
            if (emp.dateJoining > str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '<=':
          for (let emp of this.c2) {
            if (emp.dateJoining <= str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '>=':
          for (let emp of this.c2) {
            if (emp.dateJoining >= str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case '<>':
          for (let emp of this.c2) {
            if (emp.dateJoining != str.search) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
        case 'BETWEEN':
          for (let emp of this.c2) {
            if (emp.dateJoining > str.search && emp.dateJoining < str.toDate) {
              flag = 1;
              this.c1.push(emp);
            }
          } break;
      }
      if (flag == 0) { alert("Not found"); }
    }

    console.log(str);
    this.add.searchEmployee = this.c1;
  }

  resetData() {
    this.c1 = this.add.getEmployee();
  }

  ngOnInit() {
  }

}
