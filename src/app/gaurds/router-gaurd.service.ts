import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../utils/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurd implements CanActivate {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('session')) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
