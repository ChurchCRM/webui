import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });

    return next.handle(authReq).pipe(
      tap((req: any) => {
        if (req.status) {
          // TO DO
        }
        if (req.body) {
          // TO DO
        }
      }),
      catchError((response: any) => {
        // TO DO
        return of();
      })
    );
  }
}
