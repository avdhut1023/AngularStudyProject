import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private globalService: GlobalService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
      if(this.globalService.getIsLoggedIn()){
        return true;
      }{
        return false;
      }

  }
}
