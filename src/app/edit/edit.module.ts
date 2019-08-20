import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [EditEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    EditRoutingModule
  ]
})
export class EditModule { }
