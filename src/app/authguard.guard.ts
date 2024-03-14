import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) { 
  
}  
canActivate()
: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  let token = localStorage.getItem('authToken');
  if (token) {
    return true;
  } else {
    // Token does not exist, redirect to login page
    return this.router.navigate(['/login']);
  }
}
}
