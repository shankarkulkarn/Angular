import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rest-client';
  arr : Employee [] =[];
  emp : Employee = new Employee();
  constructor(private service : EmployeeService)
  {
    service.getAllEmployees().subscribe( data => this.arr=data);
  }

  delete(employeeId : number)
  {
    this.service.deleteEmployeeById(employeeId).subscribe(data=>this.emp=data);
    this.service.getAllEmployees().subscribe( data => this.arr=data);
  }

}
