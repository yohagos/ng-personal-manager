import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Employee, EmployeeService } from '@personal-manager/shared-lib';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private employeesService = inject(EmployeeService)

  employees = computed(() => this.employeesService.get_employees())
}
