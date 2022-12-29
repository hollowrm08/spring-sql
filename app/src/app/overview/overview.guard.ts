import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../auth/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewGuard implements CanLoad {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
  {
    if (this.userService.hasUser()) {
      this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }

}
