import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';



@NgModule({
  declarations: [DashboardComponent, DashboardStudentComponent, DashboardAdminComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
