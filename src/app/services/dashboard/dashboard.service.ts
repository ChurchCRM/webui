import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url = environment.backUrl;

  constructor(private http: HttpClient) { }

  getDashboard(eterpriseID: any): Observable<any> {
    return this.http.get(`${this.url}/dashboard/${eterpriseID}`);
  }

}
