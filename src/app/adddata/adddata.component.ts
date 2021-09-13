import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  form:any = FormGroup;
  submitted = false;
  show = false;
  errors ="";
  emps:any;

  datas:any;
  constructor(private formBuilder: FormBuilder,private empService: EmployeeService,private router: Router) {}


  ngOnInit(): void {
    this.emps = this.empService.getEmployees();
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName :['', Validators.required],
        username :['', Validators.required],
        age:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        salary:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        cardno:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.maxLength(16)])],

        });
      }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.show =true;

    if (this.form.invalid) {
      return;
    }
    //console.log(this.form.value);

    if (this.form.value) {
      let newEmployee = {
        id:uuid(),
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        username: this.form.value.username,
        age: this.form.value.age,
        salary: this.form.value.salary,
        cardno: this.form.value.cardno,
  

      }
      console.log(newEmployee);
      this.emps.push(newEmployee);
      this.empService.addEmployee(newEmployee);
      this.router.navigate(['']);
      }

   }
}
