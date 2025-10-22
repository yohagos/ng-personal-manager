import { Component, computed, inject } from '@angular/core';
import { EmployeeService, NavigationService } from '@personal-manager/shared-lib';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private employeeService = inject(EmployeeService)
  private _navigationService = inject(NavigationService)

  employees = computed(() => this.employeeService.get_employees())

  deactivateEmployeeById(id: number) {
    this.employeeService.deactivateEmployee(id)
    this.employees = computed(() => this.employeeService.get_employees())
  }

  openDetailsById(id: number) {
    console.log("open details by employee id => ", id)
    this._navigationService.navigateToEmployeeDetailById(id)
  }
}
