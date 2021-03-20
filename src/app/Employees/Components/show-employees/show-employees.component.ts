import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../../Models/Employee.model';
import { FilterPipe } from '../../../Pipes/filter.pipe';
import { Response } from '../../Models/response';

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

  idSelected: string | undefined;
  HighlightRow: number | undefined;
  private _searchText: string = "";
  employeesFiltered: Employee[] = [];

  get searchText(): string {
    return this._searchText;
  }
  set searchText(val: string) {
    this._searchText = val;
    this.employeesFiltered = this.filter.transform(this.employees.employees, val );
  }

  constructor(private employeeService: EmployeeService, private filter: FilterPipe) {

  }

  ClickedRow(index: number): void {
    this.HighlightRow = index;
    if (this.employeesFiltered.length == 0)
      this.idSelected = this.employees.employees[index].id;
    else
      this.idSelected = this.employeesFiltered[index].id;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe((data: Response) => this.employees = data)
  }
}
