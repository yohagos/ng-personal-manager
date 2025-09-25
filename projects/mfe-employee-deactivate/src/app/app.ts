import { Component, computed, inject, signal } from '@angular/core';
import { Employee, EmployeeService } from '@personal-manager/shared-lib';

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
