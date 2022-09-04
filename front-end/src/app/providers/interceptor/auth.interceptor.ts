import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const token = localStorage.getItem("g12Token")
   if(token){
    request = request.clone({
      headers: request.headers.set("authorization", token)
    })
   }
    return next.handle(request);
  }
}
