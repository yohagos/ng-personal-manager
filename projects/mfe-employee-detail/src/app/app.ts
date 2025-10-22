import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee, EmployeeService } from '@personal-manager/shared-lib';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private _activatedRoute = inject(ActivatedRoute)
  private employeesService = inject(EmployeeService)
  employeeId!: number

  employee = signal<Employee | undefined>(undefined);

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.employeeId = +params['id']
      if (this.employeeId !== undefined) {
        this.loadEmployeeById(this.employeeId!)
      }
    })
  }

  private loadEmployeeById(id: number) {
    this.employee.set(this.employeesService.getEmployeeById(id))
  }
}

