import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '@personal-manager/shared-lib';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  firstName = signal("")
  lastName = signal("")
  email = signal("")

  private employeesService = inject(EmployeeService)

  add(form: NgForm) {
    this.employeesService.addEmployee({
      id: 0,
      firstName: this.firstName(),
      lastName: this.lastName(),
      email: this.email(),
      activate: true,
    })
    this.clearFormContent(form)
  }

  clearFormContent(form: NgForm) {
    this.firstName.set('')
    this.firstName.set('')
    this.firstName.set('')
    form.resetForm()
  }
}
