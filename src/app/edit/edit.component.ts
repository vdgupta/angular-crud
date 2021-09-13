import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp:any;
  id:any;


  
  form:any = FormGroup;
  submitted = false;
  show = false;
  errors ="";
  emps:any;
  p:any
  constructor(private formBuilder: FormBuilder,private _Activatedroute:ActivatedRoute,private empService: EmployeeService,private router:Router) { }

  

  ngOnInit(): void {

    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getEmployees();
    this.emp=emps.find((p:any) => p.id==this.id);
    console.log(this.emp);


    this.emps = this.empService.getEmployees();
    this.form = this.formBuilder.group(
      {
        id: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName :['', Validators.required],
        username :['', Validators.required],
        age:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        salary:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        cardno:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],

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
        id:this.form.value.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        username: this.form.value.username,
        age: this.form.value.age,
        salary: this.form.value.salary,
        cardno: this.form.value.cardno,

      }
     // console.log(newEmployee);
      //this.emps.push(newEmployee);
      this.empService.updateEmployee(this.emp,this.form.value);

      this.router.navigate(['']);
      }

   }

}
