import { Injectable } from '@angular/core';
import { LocalStorageService } from '../utils/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorage: LocalStorageService) { }

  checkSession() {
    const session = this.localStorage.getItem('session');
    if (session) {
      return true;
    } else {
      return false;
    }
  }
}
