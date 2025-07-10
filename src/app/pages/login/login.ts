import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/Employee.model';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  loginObj: LoginModel = new LoginModel();

  employeeService = inject(EmployeeService);
  router = inject(Router);

  ngOnInit(){
    this.loginObj.emailId = '';
    this.loginObj.password = '';
  }

  onLogin(){
    this.employeeService.onLogin(this.loginObj).subscribe({
      next:(result:any)=>{
        if(result.result){
          alert("Login Successful");
          localStorage.setItem('leaveUser',JSON.stringify(result.data));
          this.router.navigateByUrl('/dashboard');
        }else{
          alert(result.message);
        }
      },
      error:(error)=>{
        alert('API Error');
      }
    })
  }

}
