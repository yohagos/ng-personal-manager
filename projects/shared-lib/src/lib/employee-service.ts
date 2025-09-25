import { computed, Injectable, signal } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  mockData: Employee[] = [
  {
    id: 1,
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@test.test',
    activate: true,
  },
  {
    id: 2,
    firstName: 'User',
    lastName: 'User',
    email: 'user@user.user',
    activate: true,
  },
  {
    id: 3,
    firstName: 'xyz',
    lastName: 'xyz',
    email: 'xyz@xyz.xyz',
    activate: true,
  },
  {
    id: 4,
    firstName: 'abc',
    lastName: 'abc',
    email: 'abc@abc.abc',
    activate: true,
  },
  {
    id: 5,
    firstName: 'def',
    lastName: 'def',
    email: 'def@def.def',
    activate: true,
  },
]

  private employees = signal<Employee[]>(this.mockData)

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
