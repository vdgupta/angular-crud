import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  emps:any;
  id :any;
  constructor(private empService: EmployeeService) { 

  }

  ngOnInit() {
    this.emps = this.empService.getEmployees();
    console.log(this.emps[0].cardno.toString().length);
  }

  deleteEmployee(id:any) {
    for(let i = 0; i < this.emps.length; i++) {
      if(this.emps[i].id == id) {
          this.emps.splice(i, 1);
      }
    }

    this.empService.deleteEmployee(id);
  }

}



