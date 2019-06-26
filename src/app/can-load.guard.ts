import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class CanLoadGuard implements CanLoad {

  canLoad(route: Route):
  boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Are you sure');
  }
}
