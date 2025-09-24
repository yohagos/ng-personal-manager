import { computed, Injectable, signal } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = signal<Employee[]>([])
  get_employees = computed(() => this.employees())

  addEmployee(
    employee: Employee,
  ) {
    this.employees.update(current => {
      employee.id = current.length + 1
      employee.activate = true
      return [...current, employee]
    })
  }

  deactivateEmployee(
    id: number
  ) {
    this.employees.update(current =>
      current.map(e => (e.id === id ? {...e, active: false} : e))
    )
  }
}
