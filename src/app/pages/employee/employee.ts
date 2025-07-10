import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, EmployeeList } from '../../model/Employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

  employeeService = inject(EmployeeService);
  employeeList: EmployeeList[] = [];

  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getAllEmployees().subscribe({
      next: (response: APIResponseModel) => {
        this.employeeList = response.data;
      },
      error:() => {

      }
    })
  }
}
