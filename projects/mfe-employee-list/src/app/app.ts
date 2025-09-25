import { Component, computed, inject } from '@angular/core';
import { EmployeeService } from '@personal-manager/shared-lib';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private employeeService = inject(EmployeeService)

  employees = computed(() => this.employeeService.get_employees())
}
