import { Component, OnInit } from '@angular/core';

export interface Employee {
  name: string;
  surname: string;
  email: string,
  phone: number,
  address: string,
  city: string,
  country: string,
  salary: number,
  job: string
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    name: "Jose",
    surname: "Musgo",
    email: "jose@musgo.com",
    phone: 123456789,
    address: "c/afluente",
    city: "Barcelona",
    country: "España",
    salary: 123,
    job: "Developer"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
