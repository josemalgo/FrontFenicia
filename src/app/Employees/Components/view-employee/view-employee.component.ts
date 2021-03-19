import { Component, OnInit } from '@angular/core';
import {Employee } from '../../../Models/Employee.model'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee = {
    name: "",
    surname: "",
    job: "",
    email: "",
    phone: 0,
    id: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
