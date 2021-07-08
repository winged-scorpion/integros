import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { SafeLocalUser } from "./safe.Local.User";


@Injectable()

export class AuthGuard implements CanActivate {
  visible: boolean = true;
  current: boolean;
  value: any;


  // данный конструктор проверяет данные
  constructor(private authService: SafeLocalUser, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // проверяем локальное хранилище
    this.value = localStorage.getItem('login');
    if (this.value || this.authService.isLoggedIn) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['/']);
      return false;
    }



  }
}
