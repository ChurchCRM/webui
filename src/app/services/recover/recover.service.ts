import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  private url: any = environment.backUrl;

  constructor(
    private http: HttpClient
  ) { }

  recoverAccess(email: string): Observable<any> {
    return this.http.post(`${this.url}/auth/recover`, email);
  }

}
