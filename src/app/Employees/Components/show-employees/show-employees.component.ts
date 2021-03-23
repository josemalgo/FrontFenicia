import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../../Models/Employee.model';
import { Response } from '../../Models/response';
import { Guid } from 'guid-typescript';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})

export class ShowEmployeesComponent implements OnInit {

  employee: Employee = {
    name: "",
    surname: "",
    job: "",
    email: "",
    phone: 0,
    id: ""
  };

  employees: Response = {
    employees: [],
  };

  public displayedColumns = ['name', 'surname', 'email', 'job', 'phone', 'detail', 'update', 'delete'];

  public dataSource = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe((data: Response) => this.employees = data)
  }

  redirectToDetails(id: Guid): void {
  }

  redirectToUpdate(id: Guid): void {
  }

  redirectToDelete(id: Guid): void {
  }
}
