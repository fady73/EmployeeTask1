import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Jobs } from '../ViewModel/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }
  rootUrl:string='http://hr-api.mohamed-sadek.com/'
  GetAllEmployee(): Observable<Jobs[]> {
   return this.http.get<Jobs[]> (this.rootUrl+'Job/GetList');
 }
}
