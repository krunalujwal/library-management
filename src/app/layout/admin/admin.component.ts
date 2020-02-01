import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/utils/local-storage.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
  }

  logout() {
    this.localStorage.clearAll();
  }

}
