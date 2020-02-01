import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, DashboardStudentComponent, DashboardAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
