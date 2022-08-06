import {Injectable , Injector} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient , private injector:Injector) {}

  intercept(req:any , next:any) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
    setHeaders: {
        Authorization:`Bearer ${authService.getToken()}`
    }
    })
    return next.handle(tokenizedReq);
  }
}