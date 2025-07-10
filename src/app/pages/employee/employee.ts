import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { APIResponseModel, EmployeeList } from '../../model/Employee.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [AsyncPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

  employeeService = inject(EmployeeService);
  employeeList: EmployeeList[] = [];

  @ViewChild("newModal") newModel!: ElementRef;

  deptList$: Observable<any[]> = new Observable<any[]>();
  roleList$: Observable<any[]> = new Observable<any[]>();

  ngOnInit(): void {
      this.getEmployees();
      this.deptList$ = this.employeeService.getDept();
      this.roleList$ = this.employeeService.getRoles();
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
