import { Component, computed, inject, signal } from '@angular/core';
import { EmployeeService } from "./../../../shared-lib/src/lib/employee-service";
import { Employee } from '../../../shared-lib/src/lib/employee.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private employeesService = inject(EmployeeService);

  employees = computed(() => this.employeesService.get_employees())

  deactivateEmployeeById(emp: Employee) {
    this.employeesService.deactivateEmployee(emp.id)
  }
}
