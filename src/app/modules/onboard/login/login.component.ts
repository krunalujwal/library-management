import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/utils/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    console.log('LoginComponent');
  }

  addSession() {
    this.localStorage.setItem('session', true);
  }

}
