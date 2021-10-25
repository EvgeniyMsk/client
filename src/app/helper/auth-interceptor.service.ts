import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';
const TOKEN_HEADER_KEY = 'Authorization';
const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrdXBhdm5hIiwidXNlcm5hbWUiOiJrdXBhdm5hIiwiaWF0IjoxNjM1MTk4NTQ5LCJleHAiOjE2MzUxOTkxNDl9.NyoO9ITZEnopuAf-DUk8K5S0cQiqWig_nnTOaDGUpv71tNrhfZLU8DCEoF_GP9rWbPnDjte9G1HcOnIEFuNCOg";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)});
    console.log(authRequest.headers)
    return next.handle(authRequest);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
];
