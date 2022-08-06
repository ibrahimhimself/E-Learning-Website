import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor
  (
    private AuthService:AuthService,
    private router:Router
  ){}

  canActivate(): boolean {
    if(this.AuthService.loggedIn()){
      return true;
    }
    else
    {
      this.router.navigate(["Login"])
      return false;
    }
  }
  
}
