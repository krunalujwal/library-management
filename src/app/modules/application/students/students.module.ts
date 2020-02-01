import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';


@NgModule({
  declarations: [StudentCreateComponent, StudentListComponent, StudentViewComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
