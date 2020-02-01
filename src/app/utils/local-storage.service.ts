import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, data) {
    localStorage.setItem(key, data);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }
}
