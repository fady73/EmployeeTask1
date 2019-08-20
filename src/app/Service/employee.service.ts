import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../ViewModel/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  rootUrl:string='http://hr-api.mohamed-sadek.com/'
 GetAllEmployee(): Observable<Employee[]> {
  return this.http.get<Employee[]> (this.rootUrl+'Employee/Get');
}
// ChangeStatus (Id:number,IsActive:boolean) {
//   return this.http.post('http://hr-api.mohamed-sadek.com/Employee/ChangeStatus', hero, httpOptions)
  
// }
ChangeStatus (ID:number,IsActive:boolean):any  {
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  return this.http.post<any>((this.rootUrl+"Employee/ChangeStatus"),{ID,IsActive},httpOptions);
  
}
AddNew (emp:Employee):any  {
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  return this.http.post<any>((this.rootUrl+"Employee/POST"),emp,httpOptions);
  
}
Update (emp:Employee):any  {
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  return this.http.put<any>((this.rootUrl+"Employee/PUT"),emp,httpOptions);
  
}

Get(ID:number):Observable<Employee>  {
  return this.http.get<Employee>((this.rootUrl+"Employee/Get/"+ID));
}
Deleted (ID:number):any  {
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  return this.http.delete<any>((this.rootUrl+"Employee/Delete/"+ID));
  
}
}
