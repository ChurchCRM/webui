import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.backUrl}/auth`;

  constructor(
    private http: HttpClient,
  ) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`, {status:'logout'});
  }

}
