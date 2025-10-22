import { Injectable, inject } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _router = inject(Router)

  navigateToEmployeeDetailById(employeeId: number) {
    this._router.navigate(['/detail'], {queryParams: { id: employeeId }})
  }
}
