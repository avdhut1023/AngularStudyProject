import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './login/login.component';
import { GlobalService } from './global.service';

@Injectable()
export class CanDeactivateGuard implements CanActivate, CanDeactivate<LoginComponent> {

  public constructor(private globalService: GlobalService){

  }
  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      /* if(this.globalService.getIsLoggedIn()){
        
        return true;
      }{
        alert('You have not logged in until you do stay here');
        return false;
      } */
      console.log('URL ' + currentRoute.pathFromRoot);
      return window.confirm("Are you sure");

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
