import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {path:'',redirectTo:"Home",pathMatch:'full'},
  {path:'Home',    loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule)},
  {path:'Edit/:ID',    loadChildren: () => import('./edit/edit.module').then(mod => mod.EditModule)},
  {path:'add',    loadChildren: () => import('./add/add.module').then(mod => mod.AddModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
