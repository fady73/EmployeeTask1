import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    AddRoutingModule
  ]
})
export class AddModule { }
